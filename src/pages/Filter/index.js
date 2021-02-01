import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import ModalFilter from '@components/organisms/ModalFilter';
import HeaderCategory from '@components/atoms/HeaderCategory';
import CarouselBranding from '@components/organisms/CarouselBranding';
import SelectFilterOutline from '@components/atoms/SelectFilterOutline';
import {
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// APIS
import ApiCatalogy from '@modules/api/api-catalog';
import ApiCategory from '@modules/api/api-category';

/** Styles */
import DefaultStyles from '@assets/style/default';
import Styles from './styles';

class Filter extends Component {
  constructor(props) {
    super(props);

    const { route } = this.props;
    const { slug, showAll, title, datasource, filter } = route.params;

    this.state = {
      slug,
      title,
      filter,
      showAll,
      datasource,
      widgets: [],
      loading: true,
      theme: 'light',
      oldTitle: title,
      filtersQuery: [],
      seletedItens: [],
      isBranding: false,
      filterProducts: [],
      dropSelected: null,
      loadingFilter: false,
      showModalFilter: false,
    };
  }

  componentDidMount() {
    const { slug, showAll, title, datasource, filter } = this.state;
    if (!showAll) this.getData(slug);
    if (showAll && datasource) this.getFilterData({ title, datasource });
  }

  getData = slug => {
    ApiCategory.getCategory(slug)
      .then(({ data }) => {
        const { widgets, theme } = data;
        this.setState({ widgets, theme });
      })
      .finally(() => this.setState({ loading: false }));
  };

  getFilterData = filter => {
    const { showAll } = this.state;

    this.setState({ loadingFilter: true, loading: true });
    ApiCatalogy.getCatalogSearch(filter)
      .then(({ data }) => {
        const { products, current } = data;

        if (!products.length) {
          Alert.alert('Ooops!', 'Produto(s) não disponível(eis).', [
            {
              text: 'Ok',
              onPress: () => this.handleBack(false),
            },
          ]);
          return;
        }

        if (!showAll && current) {
          const filtersQuery = current.facets;
          filtersQuery.push(current.sort);

          const seletedItens = filtersQuery.map(item => item.value);
          this.setState({ filtersQuery, seletedItens });
        }

        this.setState({ showModalFilter: false, filterProducts: products });
      })
      .finally(() => this.setState({ loadingFilter: false, loading: false }));
  };

  handleShowModalFilter = () => {
    const { showModalFilter } = this.state;
    this.setState({ showModalFilter: !showModalFilter });
  };

  handleDropSelect = dropSelected => {
    this.setState({ dropSelected });
  };

  handleClearFilter = () => {
    this.setState({
      seletedItens: [],
      filtersQuery: [],
      filterProducts: [],
      dropSelected: null,
      showModalFilter: false,
    });
  };

  handlerFilterSelect = value => {
    const { seletedItens } = this.state;

    if (seletedItens.includes(value)) {
      seletedItens.splice(seletedItens.indexOf(value), 1);
    } else {
      seletedItens.push(value);
    }

    this.setState({ seletedItens });
  };

  handleFilter = () => {
    const { seletedItens, dropSelected } = this.state;

    const filter = [...seletedItens, dropSelected.value];

    if (filter.length) this.getFilterData({ filter });
  };

  handleRemoveOneFilter = value => {
    const { filtersQuery } = this.state;
    const findIndex = filtersQuery.findIndex(item => item.value === value);
    filtersQuery.splice(findIndex, 1);
    this.setState({ filtersQuery });

    const filter = this.state.filtersQuery.map(item => item.value);

    this.setState({ seletedItens: filter }, () => {
      if (!this.state.filtersQuery.length) this.handleClearFilter();
      else this.getFilterData({ filter: filter });
    });
  };

  handleGetDataBranding = (title, filter) => {
    this.getFilterData({ title, 'filter[]': filter });
    this.setState({ showAll: true, title, isBranding: true });
  };

  handleBack = (notBackError = false) => {
    const { navigation } = this.props;
    const { oldTitle, showAll, isBranding } = this.state;

    if (isBranding) {
      this.setState({ isBranding: false, title: oldTitle });
      this.handleClearFilter();
    }
    if (showAll) {
      this.setState({ showAll: false, title: oldTitle });
    }
    if ((!showAll || !isBranding) && notBackError) navigation.goBack();
  };

  render() {
    const {
      title,
      showAll,
      loading,
      widgets,
      filtersQuery,
      seletedItens,
      dropSelected,
      loadingFilter,
      filterProducts,
      showModalFilter,
    } = this.state;
    const { navigation } = this.props;

    return (
      <View style={Styles.container}>
        {/* Header */}
        <HeaderCategory
          navigation={navigation}
          handleGoBack={this.handleBack}
        />
        {/* Section title category */}
        <View style={Styles.containerPage}>
          {loading && (
            <View style={DefaultStyles.loading}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}

          {showAll && (
            <ScrollView
              alwaysBounceVertical
              showsVerticalScrollIndicator={false}
            >
              <View style={Styles.content}>
                <View style={Styles.containerTitle}>
                  <Title title={title} style={Styles.AlignItems} />
                </View>
                <Section style={Styles.section}>
                  <View style={Styles.ProductCard}>
                    <ListCard data={filterProducts} navigation={navigation} />
                  </View>
                </Section>
              </View>
            </ScrollView>
          )}

          {filtersQuery.length > 0 && !showAll && (
            <ScrollView
              alwaysBounceVertical
              showsVerticalScrollIndicator={false}
            >
              <View style={Styles.content}>
                <View style={Styles.containerTitle}>
                  <Title title={title} style={Styles.AlignItems} />

                  <TouchableOpacity onPress={this.handleShowModalFilter}>
                    <View style={Styles.btnFilter}>
                      <Text>Filtrar</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {!showAll && (
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
                  {!showAll &&
                    widgets.map((widget, index) => {
                      const key = index;
                      const { title, template, filters } = widget;

                      if (title && template === 'grid') {
                        return (
                          <Fragment key={key}>
                            <ModalFilter
                              data={filters}
                              loading={loadingFilter}
                              visible={showModalFilter}
                              dropSelected={dropSelected}
                              seletedItens={seletedItens}
                              handleFilter={this.handleFilter}
                              setVisible={this.handleShowModalFilter}
                              handleDropSelect={this.handleDropSelect}
                              handleClearFilter={this.handleClearFilter}
                              handlerFilterSelect={this.handlerFilterSelect}
                            />
                            <View style={Styles.ProductCard}>
                              <ListCard
                                data={filterProducts}
                                navigation={navigation}
                              />
                            </View>
                          </Fragment>
                        );
                      }
                    })}
                </Section>
              </View>
            </ScrollView>
          )}

          {!filtersQuery.length && !showAll && (
            <ScrollView
              alwaysBounceVertical
              showsVerticalScrollIndicator={false}
            >
              <View style={Styles.content}>
                <Title
                  title={title}
                  style={{
                    paddingLeft: 32,
                    marginBottom: 0,
                    paddingBottom: 0,
                  }}
                />
                {widgets.map((widget, index) => {
                  const key = index;
                  const { title, template, items } = widget;

                  if (!title && template === 'swiper') {
                    return (
                      <CarouselBranding
                        key={key}
                        data={items}
                        navigation={navigation}
                        styleTitle={Styles.subTitle}
                        onPress={this.handleGetDataBranding}
                      />
                    );
                  }
                })}
              </View>
              {/* Section 2 */}
              {widgets.map((widget, index) => {
                const key = index;
                const { title, template, items } = widget;

                if (title && template === 'swiper') {
                  return (
                    <Section style={Styles.section} key={key}>
                      <CarouselBranding
                        data={items}
                        title={title}
                        navigation={navigation}
                        styleTitle={Styles.subTitle}
                        onPress={this.handleGetDataBranding}
                      />
                    </Section>
                  );
                }
              })}
              {/* Section 4 Mais vendidos */}
              <Section style={Styles.section}>
                {widgets.map((widget, index) => {
                  const key = index;
                  const { title, template, items, filters } = widget;

                  if (title && template === 'grid') {
                    return (
                      <Fragment key={key}>
                        <View style={Styles.containerSubtitle}>
                          <Title
                            title={title}
                            style={Styles.AlignItems}
                            styleFont={Styles.subTitle}
                          />

                          <TouchableOpacity
                            onPress={this.handleShowModalFilter}
                          >
                            <View style={Styles.btnFilter}>
                              <Text>Filtrar</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <ModalFilter
                          data={filters}
                          loading={loadingFilter}
                          visible={showModalFilter}
                          dropSelected={dropSelected}
                          seletedItens={seletedItens}
                          handleFilter={this.handleFilter}
                          setVisible={this.handleShowModalFilter}
                          handleDropSelect={this.handleDropSelect}
                          handleClearFilter={this.handleClearFilter}
                          handlerFilterSelect={this.handlerFilterSelect}
                        />
                        <View style={Styles.ProductCard}>
                          <ListCard data={items} navigation={navigation} />
                        </View>
                      </Fragment>
                    );
                  }
                })}
              </Section>
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
}

Filter.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Filter;
