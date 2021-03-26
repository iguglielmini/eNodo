import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import HeaderCategory from '@components/atoms/HeaderCategory';
import CarouselBranding from '@components/organisms/CarouselBranding';

// APIS
import ApiCategory from '@modules/api/api-category';

import { changeStatusBar } from '@modules/utils';

/** Styles */
import { BLACK } from '@assets/style/colors';
import DefaultStyles from '@assets/style/default';
import Styles from './styles';


class Filter extends Component {
  constructor(props) {
    super(props);

    changeStatusBar('light-content');

    const { route, navigation } = this.props;
    const {
      slug, title
    } = route.params;

    this.state = {
      navigation,
      slug,
      title,
      widgets: [],
      loading: true,
    };
  }

  componentDidMount() {
    changeStatusBar('light-content', BLACK);
    const {
      slug
    } = this.state;

    this.getData(slug);
  }

  getData = (slug) => {
    ApiCategory.getCategory(slug)
      .then(({ data }) => {
        const { widgets } = data;
        this.setState({ widgets });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleGoFilter = (filters, title) => {
    const { navigation } = this.state;
    const f = filters;

    if (!filters.title) f.title = title;
    navigation.navigate('Filter', { filters: f });
  };

  handleGoFilterResult = (params) => {
    const { navigation } = this.state;
    navigation.navigate('FilterResult', { params });
  };

  render() {
    const {
      title,
      loading,
      widgets
    } = this.state;
    const { navigation, lengthCart } = this.props;

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
              {widgets.map((widget, index) => {
                const key = index;
                const {
                  title: widgetTitle, template, items, filters
                } = widget;

                // section 1
                if (!widgetTitle && template === 'swiper') {
                  return (
                    <View style={Styles.content} key={`View_${template}_${key.toString()}`}>
                      <Title
                        title={title}
                        style={{
                          paddingLeft: 32,
                          marginBottom: 0,
                          paddingBottom: 0,
                        }}
                      />
                      <CarouselBranding
                        key={`CarouselBranding_${template}_${key.toString()}`}
                        data={items}
                        navigation={navigation}
                        styleTitle={Styles.subTitle}
                        onPress={this.handleGoFilterResult}
                      />
                    </View>
                  );
                }

                // section 2
                if (widgetTitle && template === 'swiper') {
                  return (
                    <Section style={Styles.section} key={`Section_${template}_${key.toString()}`}>
                      <CarouselBranding
                        key={`CarouselBranding_${template}_${key.toString()}`}
                        data={items}
                        title={widgetTitle}
                        showTitle={false}
                        navigation={navigation}
                        styleTitle={Styles.subTitle}
                        onPress={this.handleGoFilterResult}
                      />
                    </Section>
                  );
                }

                //  section 3
                if (widgetTitle && template === 'grid') {
                  return (
                    <Section style={Styles.section} key={`Section_${template}_${key.toString()}`}>
                      <Fragment key={`Frag_${template}_${key.toString()}`}>
                        <View style={Styles.containerSubtitle}>
                          <Title
                            title={widgetTitle}
                            style={Styles.AlignItems}
                            styleFont={Styles.subTitle}
                          />
                          <TouchableOpacity
                            onPress={() => { this.handleGoFilter(filters, widgetTitle); }}
                          >
                            <View style={Styles.btnFilter}>
                              <Text>Filtrar</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View style={Styles.ProductCard}>
                          <ListCard data={items} navigation={navigation} />
                        </View>
                      </Fragment>
                    </Section>
                  );
                }

                return false;
              })}
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
