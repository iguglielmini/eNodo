import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image, ScrollView } from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import ListCard from '@components/molecules/ListCard';
import IntroCard from '@components/molecules/IntroCard';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import CategoryList from '@components/molecules/CategoryList';
import ImageIntroCard from '@components/molecules/ImageIntroCard';
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
import HeroBanner from '../../components/molecules/HeroBanner';
import HeaderHome from '../../components/molecules/HeaderHome';

class Home extends Component {
  constructor(props) {
    super(props);

    changeStatusBar('dark-content');

    this.state = {
      data: [],
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
    if (this.props.user.expired) {
      this.props.toast.open({
        title: 'Conta',
        message: 'Sua sessão expirou, por favor, realize login novamente.',
        type: 'warning',
      });
    }
  };

  loadData = () => {
    changeStatusBar('dark-content', WHITELIGHT);
    this.getData();
  };

  getData = async () => {
    const { data } = await ApiHome.getHome();
    if (data) this.setState({ data });
  };

  updateLengthCart = async () => {
    try {
      const { data } = await ApiShopping.getBasket();
      this.props.saveLengthCart(data.basket.totalItems);
    } catch (error) {
      console.log(error);
      this.props.saveLengthCart(0);
    }
  };

  generateSections = (navigation, lengthCart) => {
    const tempSections = [];
    const { data } = this.state;

    if (!data.length) return null;

    function handleGoFilterResult(params) {
      navigation.navigate('FilterResult', {
        ...params,
        hideFilterButton: true,
      });
    }

    // Uncomment the following lines to test Home without Hero Banner
    // const hero = data.findIndex(item => item.title === 'Hero');

    // data.splice(hero, 1);

    data.forEach((section, index) => {
      const {
        title, theme, widgets, style
      } = section;

      widgets.forEach((widget, widgetIndex) => {
        const key = widgetIndex + index;
        const {
          items, template, highlight, showAll, searchQuery
        } = widget;

        if (!items.length) return;

        function showMore(targetType, target) {
          let params;

          if (target && targetType) {
            params = queryStringToJSON(target);

            switch (targetType) {
              case 'search':
                navigation.navigate('FilterResult', {
                  params,
                  hideFilterButton: true,
                });
                break;
              case 'product':
                navigation.navigate('ProductDetails', {
                  params,
                });
                break;
              case 'category':
                navigation.navigate('Category', {
                  params,
                });
                break;
              default:
                break;
            }

            return;
          }

          params = queryStringToJSON(searchQuery);

          navigation.navigate('FilterResult', {
            params,
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
              <Section style={{ paddingTop: 16 }} key={key}>
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
                    style={[Styles.belSection, Styles.section]}
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
                      <ButtonSeeAll theme={theme} onPress={showMore} />
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
                      style={Styles.belTitle}
                    />
                  )}

                  <ListCard
                    data={items}
                    navigation={navigation}
                    theme={theme}
                  />
                  {showAll && <ButtonSeeAll theme={theme} onPress={showMore} />}
                </Section>
              );
            }

            if (style === 'default' && theme === 'dark') {
              tempSections.push(
                <Section style={{ paddingTop: 48 }} theme={theme} key={key}>
                  <Title
                    theme={theme}
                    title={title}
                    style={Styles.novidadeBellTitle}
                  />
                  <ImageIntroCard />
                  <View style={Styles.section}>
                    <ListCard
                      data={items}
                      theme={theme}
                      navigation={navigation}
                    />
                  </View>
                  {showAll && <ButtonSeeAll theme={theme} onPress={showMore} />}
                </Section>
              );
            }
            break;

          case 'bullets':
            tempSections.push(
              <Section key={key}>
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
              <Section key={key} style={{ paddingVertical: 0 }}>
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

    return (
      <SafeAreaView>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  saveLengthCart, favoritesUser
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withToast(Home));
