/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Component
import Card from '@components/molecules/Card';
import Section from '@components/atoms/Section';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import HeaderCategory from '@components/atoms/HeaderCategory';
import SelectFilterOutline from '@components/atoms/SelectFilterOutline';
import {
  View,
  Text,
  Alert,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// APIS
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
      itemsCount: 0,
      pageCount: 1,
      pageNumber: 1,
      loading: false,
      filtersQuery: [],
      filterProducts: [],
      loadingShowMore: false,
    };

    props.navigation.addListener('focus', () => changeStatusBar('light-content', BLACK));
  }

  componentDidMount() {
    const {
      route: { params },
    } = this.props;
    this.loadData(params, 'loading');
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps({ route }) {
    const { params } = route;
    this.loadData(params, 'loading');
  }

  loadData = (params, loading) => {
    if (!params.searchTerms && !params.isFavorite) {
      this.getFilterData(params, loading);
    }
    if (params.searchTerms && !params.isFavorite) this.getFilterTerms(params);
  };

  getFilterData = (params, loading) => {
    const { filterProducts } = this.state;
    this.setState({ [loading]: true });

    ApiCatalogy.getCatalogSearch(params)
      .then(({ data }) => {
        const {
          products, current, filters, pagination
        } = data;

        if (!products.length) {
          Alert.alert('Ooops!', 'Produto(s) não disponível(eis).', [
            {
              text: 'Ok',
              onPress: () => this.handleBack(false),
            },
          ]);
          return;
        }

        if (current) this.setState({ filtersQuery: current.facets });

        if (pagination.pageCount > pagination.pageNumber) {
          products.map(item => filterProducts.push(item));
          this.setState({ filterProducts });
        } else {
          this.setState({ filterProducts: products });
        }

        this.setState({ filters, ...pagination });
      })
      .finally(() => this.setState({ [loading]: false }));
  };

  getFilterTerms = (params) => {
    const { searchTerms } = params;
    const {
      products, current, filters, pagination
    } = searchTerms;
    const { filterProducts } = this.state;

    products.map(item => filterProducts.push(item));

    if (current) this.setState({ filtersQuery: current.facets });
    this.setState({ filters, filterProducts, ...pagination });
  };

  handleRemoveOneFilter = (value) => {
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

  handleShowModalFilter = (params) => {
    const { terms } = params;
    const { filters } = this.state;
    const { navigation } = this.props;

    this.setState({ filtersQuery: [], filterProducts: [] });

    navigation.navigate('Filter', { filters: { ...filters, terms } });
  };

  showMore = () => {
    const { pageCount } = this.state;
    let { pageNumber } = this.state;

    pageNumber += 1;

    const {
      route: { params },
    } = this.props;

    params.pageNumber = pageNumber;
    if (pageNumber > pageCount) {
      params.pageNumber = pageCount;
    }

    this.loadData(params, 'loadingShowMore');
  };

  listHeader = () => {
    const { route } = this.props;
    const { terms, title, hideFilterButton } = route.params;
    const { filtersQuery, itemsCount, loading } = this.state;

    return (
      <>
        <View style={[Styles.content, Styles.containerTitle]}>
          <View style={Styles.wrapperTitle}>
            {!loading && (
              <Text style={Styles.title}>
                {textCapitalize(!title ? `${itemsCount} Resultados` : title)}
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
      </>
    );
  };

  listFooter = () => {
    const { pageCount, pageNumber, loadingShowMore } = this.state;

    return (
      <Section style={[Styles.section, Styles.listFooter]}>
        <View style={{ paddingTop: 32 }}>
          {(pageCount > pageNumber && !loadingShowMore) && (
            <ButtonSeeAll
              theme="light"
              title="Ver mais"
              onPress={this.showMore}
            />
          )}
          {loadingShowMore && <ActivityIndicator size="large" color="#000" />}
        </View>
      </Section>
    );
  };

  render() {
    const { loading, filterProducts } = this.state;
    const { navigation, lengthCart, route } = this.props;
    const { isFavorite, hideOptionsButtons } = route.params;

    return (
      <SafeAreaView style={DefaultStyles.viewBlack}>
        <View style={Styles.container}>
          {/* Header */}
          <HeaderCategory
            theme="light"
            lengthCart={lengthCart}
            navigation={navigation}
            handleGoBack={navigation.goBack}
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
            <FlatList
              numColumns={2}
              data={filterProducts}
              style={Styles.scroll}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={Styles.containerCard}
              renderItem={({ item, index }) => {
                const key = index;
                const isOdd = key % 2 === 1;

                return (
                  <Card
                    key={key}
                    item={item}
                    theme="light"
                    style={{
                      marginTop: isOdd ? 64 : 0,
                      marginLeft: isOdd ? 15 : 0,
                    }}
                    onClick={itemDetails => navigation.navigate('ProductDetails', itemDetails)
                    }
                  />
                );
              }}
              ListFooterComponent={this.listFooter()}
              ListHeaderComponent={this.listHeader()}
              keyExtractor={(_, index) => index.toString()}
            />
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
