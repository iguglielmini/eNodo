/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Component

import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import HeaderCategory from '@components/atoms/HeaderCategory';
import SelectFilterOutline from '@components/atoms/SelectFilterOutline';
import {
  View,
  Text,
  Alert,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// icons
import ArrowIcon from '@assets/svg/arrow';

// APIS
import ApiProfile from '@modules/api/api-profile';
import ApiCatalogy from '@modules/api/api-catalog';

import { changeStatusBar, textCapitalize } from '@modules/utils';

/** Styles */
import DefaultStyles from '@assets/style/default';
import { BLACK } from '@assets/style/colors';
import Styles from './styles';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {},
      pageCount: 1,
      pageNumber: 1,
      loading: false,
      filtersQuery: [],
      filterProducts: [],
    };

    props.navigation.addListener('focus', () =>
      changeStatusBar('light-content', BLACK)
    );
  }

  componentDidMount() {
    const {
      route: { params },
    } = this.props;
    this.loadData(params);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps({ route }) {
    const { params } = route;
    this.loadData(params);
  }

  loadData = params => {
    if (!params.searchTerms && !params.isFavorite) this.getFilterData(params);
    if (params.searchTerms && !params.isFavorite) this.getFilterTerms(params);
    if (!params.searchTerms && params.isFavorite) this.getFavorites();
  };

  getFilterData = params => {
    const { filterProducts } = this.state;
    this.setState({ loading: true });

    ApiCatalogy.getCatalogSearch(params)
      .then(({ data }) => {
        const { products, current, filters, pagination } = data;

        if (!products.length) {
          Alert.alert('Ooops!', 'Produto(s) não disponível(eis).', [
            {
              text: 'Ok',
              onPress: () => this.handleBack(false),
            },
          ]);
          return;
        }

        products.map(item => {
          filterProducts.push(item);
        });
        if (current) this.setState({ filtersQuery: current.facets });

        this.setState({ filters, filterProducts, ...pagination });
      })
      .finally(() => this.setState({ loading: false }));
  };

  getFilterTerms = params => {
    const { searchTerms } = params;
    const { products, current, filters, pagination } = searchTerms;
    const { filterProducts } = this.state;

    products.map(item => {
      filterProducts.push(item);
    });

    if (current) this.setState({ filtersQuery: current.facets });
    this.setState({ filters, filterProducts, ...pagination });
  };

  getFavorites = () => {
    this.setState({ loading: true });

    ApiProfile.getFavoritesDetails()
      .then(({ data }) => {
        const { items } = data;
        this.setState({ filterProducts: items });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleRemoveOneFilter = value => {
    const { route } = this.props;
    const { params } = route;
    const { filtersQuery } = this.state;
    const findIndex = filtersQuery.findIndex(item => item.value === value);
    filtersQuery.splice(findIndex, 1);

    const list = filtersQuery.map(item => item.value);
    params.facets = list;
    this.getFilterData(params);
    this.setState({ filtersQuery });
  };

  handleShowModalFilter = params => {
    const { terms } = params;
    const { filters } = this.state;
    const { navigation } = this.props;
    navigation.navigate('Filter', { filters: { ...filters, terms } });
  };

  showMore = () => {
    let { pageNumber, pageCount } = this.state;
    pageNumber += 1;
    const {
      route: { params },
    } = this.props;

    params.pageNumber = pageNumber;
    if (pageNumber > pageCount) {
      params.pageNumber = pageCount;
    }

    this.loadData(params);
  };

  render() {
    const { loading, filtersQuery, filterProducts, pageCount } = this.state;

    const { navigation, lengthCart, route } = this.props;
    const {
      title,
      terms,
      isFavorite,
      hideFilterButton,
      hideOptionsButtons,
    } = route.params;

    return (
      <SafeAreaView style={DefaultStyles.viewBlack}>
        <View style={Styles.container}>
          {/* Header */}
          <HeaderCategory
            theme="light"
            lengthCart={lengthCart}
            navigation={navigation}
            handleGoBack={() => navigation.goBack()}
            hideOptionsButtons={hideOptionsButtons || isFavorite}
          />
          {/* Section title category */}
          <View style={Styles.containerPage}>
            {loading && (
              <View
                style={{ ...DefaultStyles.loading, backgroundColor: '#F3F3F3' }}
              >
                <ActivityIndicator size="large" color="#000" />
              </View>
            )}
            <ScrollView
              alwaysBounceVertical
              style={Styles.scroll}
              showsVerticalScrollIndicator={false}
            >
              <View style={Styles.content}>
                <View style={Styles.containerTitle}>
                  <View style={Styles.wrapperTitle}>
                    {!loading && (
                      <Text style={Styles.title}>
                        {textCapitalize(
                          !title ? `${filterProducts.length} Resultados` : title
                        )}
                      </Text>
                    )}
                  </View>
                  {!hideFilterButton && (
                    <TouchableOpacity
                      style={Styles.btnFilter}
                      onPress={() => this.handleShowModalFilter({ terms })}
                    >
                      <Text>Filtrar</Text>
                    </TouchableOpacity>
                  )}
                </View>
                {filtersQuery.length > 0 && (
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={Styles.scrollSelectFilter}
                  >
                    <SelectFilterOutline
                      isSelected
                      data={filtersQuery}
                      onSelect={this.handleRemoveOneFilter}
                    />
                  </ScrollView>
                )}
                <Section style={Styles.section}>
                  <View style={Styles.ProductCard}>
                    <ListCard data={filterProducts} navigation={navigation} />
                    {/* Pagination */}
                    {pageCount > 1 && (
                      <View style={{ paddingTop: 32 }}>
                        <ButtonSeeAll
                          theme="light"
                          title="Ver mais"
                          onPress={this.showMore}
                        />
                      </View>
                    )}
                    {isFavorite && !filterProducts.length && (
                      <>
                        <View style={Styles.contentFavoritesNotFound}>
                          <Text style={Styles.textNotFound}>
                            Você ainda não adicionou produtos em seus favoritos.
                          </Text>
                          <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={Styles.btnNotFound}>
                              <Text style={{ marginRight: 8 }}>
                                Continue comprando
                              </Text>
                              <ArrowIcon />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </>
                    )}
                  </View>
                </Section>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

Filter.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = store => ({
  lengthCart: store.cart.lengthCart,
  favorites: store.user.favorites,
});

export default connect(
  mapStateToProps,
  null
)(Filter);
