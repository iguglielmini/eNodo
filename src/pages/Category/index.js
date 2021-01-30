import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import SelectFilter from '@components/atoms/SelectFilter';
import ModalFilter from '@components/organisms/ModalFilter';
import HeaderCategory from '@components/atoms/HeaderCategory';
import CarouselBranding from '@components/organisms/CarouselBranding';
import {
  View,
  Text,
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

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: [],
      loading: true,
      theme: 'light',
      seletedItens: [],
      dropSelected: null,
      loadingFilter: false,
      showModalFilter: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { route } = this.props;
    const { slug } = route.params;
    const { data } = await ApiCategory.getCategory(slug);

    if (data) {
      const { widgets, theme } = data;
      this.setState({ widgets, theme, loading: false });
    }
  };

  handleShowModalFilter = () => {
    const { showModalFilter } = this.state;

    if (showModalFilter) this.handleClearFilter();

    this.setState({ showModalFilter: !showModalFilter });
  };

  handleDropSelect = dropSelected => {
    this.setState({ dropSelected });
  };

  handleClearFilter = () => {
    this.setState({ seletedItens: [], dropSelected: null });
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

  handleFilter = async () => {
    const { seletedItens, dropSelected } = this.state;
    this.setState({ loadingFilter: true });

    const filter = [...seletedItens, dropSelected.value];

    if (filter.length) {
      const data = await ApiCatalogy.getCatalogSearch(filter);
      console.log('XOLA ', data);
    }

    this.setState({ loadingFilter: false, showModalFilter: false });
  };

  render() {
    const { navigation, route } = this.props;
    const {
      loading,
      widgets,
      seletedItens,
      dropSelected,
      loadingFilter,
      showModalFilter,
    } = this.state;
    const { title } = route.params;

    return (
      <View style={Styles.Container}>
        {/* Header */}
        <HeaderCategory navigation={navigation} />
        {/* Section title category */}
        <View style={Styles.containerPage}>
          {loading && (
            <View style={DefaultStyles.loading}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
          <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 48 }}>
              <Title
                title={title}
                style={{ paddingLeft: 32, marginBottom: 0, paddingBottom: 0 }}
              />
              {widgets.map((widget, index) => {
                const key = index;
                const { title, template, items } = widget;

                if (!title && template === 'swiper') {
                  return (
                    <CarouselBranding
                      key={key}
                      data={items}
                      pageName="CategorySub"
                      navigation={navigation}
                      styleTitle={Styles.subTitle}
                    />
                  );
                }
              })}
            </View>
            <ScrollView horizontal>{/* <SelectFilter /> */}</ScrollView>
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
                      pageName="CategorySub"
                      navigation={navigation}
                      styleTitle={Styles.subTitle}
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
                          styleFont={Styles.subTitle}
                          style={Styles.AlignItems}
                        />

                        <TouchableOpacity onPress={this.handleShowModalFilter}>
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
        </View>
      </View>
    );
  }
}

Category.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Category;
