import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import HeaderCategory from '@components/atoms/HeaderCategory';
import SelectFilterOutline from '@components/atoms/SelectFilterOutline';
import {
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
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
      loading: false,
      filtersQuery: [],
      filterProducts: [],
    };

    props.navigation.addListener('focus', () => changeStatusBar('light-content', BLACK));
  }

  componentDidMount() {
    const { route: { params } } = this.props;
    this.loadData(params);
  }

  UNSAFE_componentWillReceiveProps({ route }) {
    const { params } = route;
    console.log('PICA ', route);
    this.loadData(params);
  }

  loadData = (params) => {
    if(!params.searchTerms) this.getFilterData(params);
    else {
      const { searchTerms } = params;
      const { products, current, filters } = searchTerms;

      if (current) this.setState({ filtersQuery: current.facets });
      this.setState({ filters, filterProducts: products });
    }
  };

  getFilterData = params => {
    this.setState({ loading: true });

    ApiCatalogy.getCatalogSearch(params)
      .then(({ data }) => {
        const { products, current, filters } = data;

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

        this.setState({ filters, filterProducts: products });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleRemoveOneFilter = value => {
    const { route } = this.props;

    const { filtersQuery } = this.state;
    const findIndex = filtersQuery.findIndex(item => item.value === value);
    filtersQuery.splice(findIndex, 1);

    const list = filtersQuery.map(item => item.value);
    const { params } = route.params;

    params.facets = list;
    this.getFilterData(params);
    this.setState({ filtersQuery });
  };

  handleShowModalFilter = () => {
    const { filters } = this.state;
    const { navigation, route } = this.props;

    navigation.navigate('Filter', { filters });
  };

  render() {
    const {
      loading,
      filtersQuery,
      filterProducts,
    } = this.state;

    const { navigation, lengthCart, route } = this.props;
    const { title, hideFilterButton, hideOptionsButtons } = route.params;

    return (
      <SafeAreaView style={DefaultStyles.viewBlack}>
        <View style={Styles.container}>
          {/* Header */}
          <HeaderCategory
            lengthCart={lengthCart}
            navigation={navigation}
            hideOptionsButtons={hideOptionsButtons}
            handleGoBack={() => navigation.goBack()}
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
              showsVerticalScrollIndicator={false}
            >
              <View style={Styles.content}>
                <View style={Styles.containerTitle}>
                  <View style={Styles.wrapperTitle}>
                    {!loading && (
                      <Text style={Styles.title}>{textCapitalize(!title ? `${filterProducts.length} resultados` : title)}</Text>
                    )}
                  </View>
                  {!hideFilterButton && (
                    <TouchableOpacity
                      style={Styles.btnFilter}
                      onPress={this.handleShowModalFilter}
                    >
                      <Text>Filtrar</Text>
                    </TouchableOpacity>
                  )}
                </View>
                {filtersQuery.length > 0 && (
                  <ScrollView
                    horizontal
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
});

export default connect(
  mapStateToProps,
  null
)(Filter);
