import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import ListCard from '@components/molecules/ListCard';
import IntroCard from '@components/molecules/IntroCard';
import HeroBanner from '@components/molecules/HeroBanner';
import HeaderHome from '@components/molecules/HeaderHome';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import CategoryList from '@components/molecules/CategoryList';
import CarouselBranding from '@components/organisms/CarouselBranding';

import { withToast } from '@components/molecules/Toast';

/* Images */
import imageBel from '@assets/images/bel.png';
import imageKiss from '@assets/images/kiss.png';

// Redux, Storage, Utils e API
import ApiHome from '@modules/api/api-home';
import ApiProfile from '@modules/api/api-profile';
import ApiShopping from '@modules/api/api-shopping';
import DeviceStorage from '@modules/services/device-storage';
import { saveLengthCart, favoritesUser } from '@redux/actions';
import { changeStatusBar, queryStringToJSON } from '@modules/utils';

/* Styles */
import { WHITELIGHT, BLACK, WHITE } from '@assets/style/colors';
import { SafeAreaView } from 'react-navigation';
import { SPACE_HEADER } from '@assets/style/wrapper';
import Styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);

    changeStatusBar('dark-content', WHITELIGHT);

    this.state = {
      data: [],
      loading: true,
    };

    this.updateLengthCart();

    props.navigation.addListener('focus', () => this.loadData());
  }

  componentDidMount() {
    // TODO: refactor
    setTimeout(() => {
      this.checkSessionExpired();
    }, 1000);
  }

  getFavorites = async () => {
    await ApiProfile.getFavorites().then(({ data }) => {
      DeviceStorage.setItem('@BelshopApp:favorites', data.items);
      this.props.favoritesUser(data.items);
    });
  };

  checkSessionExpired = () => {
    const { toast, user } = this.props;
    if (user.expired) {
      toast.open({
        title: 'Conta',
        message: 'Sua sessão expirou, por favor, realize login novamente.',
        type: 'warning',
      });
    }
  };

  loadData = () => {
    changeStatusBar('dark-content', WHITELIGHT);
    this.getData();
    this.getFavorites();
  };

  getData = async () => {
    const { data } = await ApiHome.getHome();
    const { navigation } = this.props;
    if (data) {
      this.setState({ data });
    } else {
      navigation.navigate('LoadError', { page: 'Home', reload: true });
    }
    setTimeout(() => this.setState({ loading: false }), 500);
  };

  updateLengthCart = () => {
    ApiShopping.getBasket()
      .then(({ data }) => {
        const { basket } = data;
        this.props.saveLengthCart(basket.totalItems);
      })
      .catch(() => {
        this.props.saveLengthCart(0);
      });
  };

  generateSections = (navigation, lengthCart) => {
    const tempSections = [];
    const { data } = this.state;

    if (!data.length) return null;

    function handleGoFilterResult(params) {
      navigation.navigate('FilterResult', {
        ...params,
        hideFilterButton: false,
      });
    }

    // Uncomment the following lines to test Home without Hero Banner
    // const hero = data.findIndex(item => item.title === 'Hero');

    // data.splice(hero, 1);

    data.forEach((section, index) => {
      const {
        title, theme, widgets, style, banner
      } = section;

      widgets.forEach((widget, widgetIndex) => {
        const key = `widget-${widgetIndex}-${index}`;
        const {
          items, template, highlight, showAll, searchQuery
        } = widget;

        if (!items.length) return;

        function showMore(targetType, target) {
          if (target && targetType) {
            const { targetTitle, brand } = queryStringToJSON(target);

            switch (targetType) {
              case 'search':
                navigation.navigate('FilterResult', {
                  brand,
                  title: targetTitle,
                  hideFilterButton: true,
                });
                break;
              case 'product':
                navigation.navigate('ProductDetails', {
                  slug: target,
                });
                break;
              case 'category':
                navigation.navigate('Category', {
                  slug: target,
                });
                break;
              case 'webview':
                navigation.navigate('ExternalLink', {
                  source: { uri: target },
                });
                break;
              default:
                break;
            }

            return;
          }

          const params = queryStringToJSON(searchQuery);

          navigation.navigate('FilterResult', {
            ...params,
            hideFilterButton: true,
          });
        }

        // eslint-disable-next-line default-case
        switch (template) {
          case 'hero':
            tempSections.push(
              <Section key={key}>
                <HeroBanner
                  gallery={items}
                  navigation={navigation}
                  lengthCart={lengthCart}
                  theme={theme}
                  action={showMore}
                />
              </Section>
            );
            break;

          case 'swiper':
            tempSections.push(
              <Section style={{ paddingTop: 80 }} key={key}>
                <CarouselBranding
                  showFooter
                  data={items}
                  theme={theme}
                  title={title}
                  showTitle={false}
                  navigation={navigation}
                  onPress={handleGoFilterResult}
                />
              </Section>
            );
            break;

          case 'grid':
            if (highlight) {
              if (style === 'queridinhos') {
                tempSections.push(
                  <Section
                    style={[
                      Styles.belSection,
                      Styles.section,
                      { paddingTop: 160 },
                    ]}
                    key={key}
                  >
                    <View style={Styles.containerBel}>
                      <View style={Styles.containerTitleBel}>
                        <Title
                          size="xlarge"
                          title={'Queri\ndinhos'}
                          style={Styles.belTitle}
                        />
                        <Image source={imageBel} style={Styles.belImage} />
                      </View>
                      <Image source={imageKiss} style={Styles.kissImage} />
                    </View>
                    <View style={{ paddingBottom: 44 }}>
                      <IntroCard
                        price={highlight.price}
                        title={highlight.title}
                        image={highlight.image}
                      />
                    </View>
                    <ListCard data={items} navigation={navigation} />
                    {showAll && (
                      <View style={{ marginLeft: 16, marginTop: 48 }}>
                        <ButtonSeeAll theme={theme} onPress={showMore} />
                      </View>
                    )}
                  </Section>
                );
              }
            }

            if (style === 'promos') {
              tempSections.push(
                <Section
                  style={{
                    ...Styles.section,
                    paddingTop: SPACE_HEADER,
                  }}
                  key={key}
                >
                  {index === 0 ? (
                    <>
                      <HeaderHome
                        title={'Promos \nda Semana'}
                        color={theme === 'light' ? BLACK : WHITE}
                        section={title}
                      />
                    </>
                  ) : (
                    <Title
                      title={'Promos \nda Semana'}
                      style={Styles.belTitlePromo}
                    />
                  )}

                  <ListCard
                    data={items}
                    navigation={navigation}
                    theme={theme}
                  />
                  {showAll && (
                    <View style={{ marginLeft: 16, marginTop: 48 }}>
                      <ButtonSeeAll theme={theme} onPress={showMore} />
                    </View>
                  )}
                </Section>
              );
            }

            if (style === 'default' && theme === 'dark') {
              const { width } = Dimensions.get('window');

              tempSections.push(
                <Section
                  style={{
                    paddingTop: 48,
                    paddingBottom: 48,
                    marginTop: 80,
                  }}
                  theme={theme}
                  key={key}
                >
                  <Title
                    theme={theme}
                    title={title}
                    style={Styles.novidadeBellTitle}
                  />
                  <Image
                    source={{
                      uri: banner.url,
                      width,
                      height: width,
                    }}
                    style={Styles.newsBanner}
                  />
                  <View style={Styles.section}>
                    <ListCard
                      data={items}
                      theme={theme}
                      navigation={navigation}
                    />
                  </View>
                  {showAll && (
                    <View style={{ marginLeft: 16, marginTop: 48 }}>
                      <ButtonSeeAll theme={theme} onPress={showMore} />
                    </View>
                  )}
                </Section>
              );
            }
            break;

          case 'bullets':
            tempSections.push(
              <Section key={key} style={{ marginTop: 80 }}>
                <Title title={title} style={{ marginLeft: 16 }} />
                <CategoryList
                  data={items}
                  navigation={navigation}
                  theme="dark"
                />
              </Section>
            );
            break;

          case 'links':
            tempSections.push(
              <Section key={key} style={{ paddingVertical: 0, marginTop: 80 }}>
                <LinkHelp data={items} theme="dark" />
              </Section>
            );
            break;
        }
      });
    });

    return tempSections;
  };

  render() {
    const { navigation, lengthCart } = this.props;
    const { loading } = this.state;

    return (
      <SafeAreaView>
        {loading && (
          <View style={Styles.loadingView}>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        )}
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          {this.generateSections(navigation, lengthCart)}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = store => ({
  lengthCart: store.cart.lengthCart,
  user: store.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    saveLengthCart,
    favoritesUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withToast(Home));
