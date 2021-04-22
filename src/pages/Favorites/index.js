/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import HeaderCategory from '@components/atoms/HeaderCategory';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// icons
import ArrowIcon from '@assets/svg/arrow';

// APIS
import ApiProfile from '@modules/api/api-profile';

import { changeStatusBar } from '@modules/utils';

/** Styles */
import DefaultStyles from '@assets/style/default';
import { BLACK } from '@assets/style/colors';
import Styles from './styles';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
    };

    props.navigation.addListener('focus', () => changeStatusBar('light-content', BLACK));
  }

  componentDidMount() {
    this.getFavorites();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps() {
    this.getFavorites();
  }

  getFavorites = () => {
    this.setState({ loading: true });

    ApiProfile.getFavoritesDetails()
      .then(({ data }) => {
        const { items } = data;
        this.setState({ products: items });
      })
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { loading, products } = this.state;

    const { navigation } = this.props;

    return (
      <SafeAreaView style={DefaultStyles.viewBlack}>
        <View style={Styles.container}>
          {/* Header */}
          <HeaderCategory
            theme="light"
            navigation={navigation}
            handleGoBack={() => navigation.goBack()}
            hideOptionsButtons
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
                    {!loading && <Text style={Styles.title}>Favoritos</Text>}
                  </View>
                </View>
                <Section style={Styles.section}>
                  <View style={Styles.ProductCard}>
                    <ListCard data={products} navigation={navigation} />
                    {!products.length && (
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

Favorites.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = store => ({
  favorites: store.user.favorites,
});

export default connect(
  mapStateToProps,
  null
)(Favorites);
