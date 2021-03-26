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

    changeStatusBar('light-content');

    const { route, navigation } = this.props;
    const {
      params,
      hideFilterButton
    } = route.params;

    this.state = {
      navigation,
      params,
      hideFilterButton,
      filters: {},
      filtersQuery: [],
      filterProducts: [],
    };

    props.navigation.addListener(
      'focus',
      () => this.loadData()
    );
  }

  loadData=() => {
    changeStatusBar('light-content', BLACK);
    const { route } = this.props;
    const {
      params,
      hideFilterButton
    } = route.params;

    this.getFilterData(params);
    this.setState({ hideFilterButton });
  }

  getFilterData = (params) => {
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

        if (current) {
          const filtersQuery = current.facets;
          this.setState({ filtersQuery });
        }

        this.setState({ filters });
        this.setState({ filterProducts: products });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleRemoveOneFilter = (value) => {
    const { filtersQuery, params } = this.state;
    const findIndex = filtersQuery.findIndex(item => item.value === value);
    filtersQuery.splice(findIndex, 1);
    this.setState({ filtersQuery });

    const list = filtersQuery.map(item => item.value);
    const newParams = params;

    newParams.facets = list;
    this.getFilterData(newParams);
  };

  handleShowModalFilter = () => {
    const { filters, navigation } = this.state;
    navigation.navigate('Filter', { filters });
  }

  render() {
    const {
      params,
      hideFilterButton,
      loading,
      filtersQuery,
      filterProducts,
    } = this.state;

    const { navigation, lengthCart } = this.props;
    const { title } = params;

    return (
      <SafeAreaView style={DefaultStyles.viewBlack}>
        <View style={Styles.container}>
          {/* Header */}
          <HeaderCategory
            lengthCart={lengthCart}
            navigation={navigation}
            handleGoBack={() => { navigation.goBack(); }}
          />
          {/* Section title category */}
          <View style={Styles.containerPage}>
            {loading && (
              <View style={{ ...DefaultStyles.loading, backgroundColor: '#F3F3F3' }}>
                <ActivityIndicator size="large" color="#000" />
              </View>
            )}
            <ScrollView
              alwaysBounceVertical
              showsVerticalScrollIndicator={false}
            >
              <View style={Styles.content}>
                <View style={Styles.containerTitle}>
                  <View
                    style={Styles.wrapperTitle}
                  >
                    <Text style={Styles.title}>
                      {textCapitalize(title)}
                    </Text>
                  </View>
                  {!hideFilterButton && (
                    <TouchableOpacity onPress={this.handleShowModalFilter} style={Styles.btnFilter}>
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
                    <ListCard
                      data={filterProducts}
                      navigation={navigation}
                    />
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
