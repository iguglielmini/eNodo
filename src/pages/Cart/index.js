import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';

/* Components */
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import PriceTotal from '@components/molecules/PriceTotal';
import PaymentBanner from '@components/atoms/PaymentBanner';
import FloatCartButton from '@components/atoms/FloatCartButton';
import CardCartProduct from '@components/organisms/CardCartProduct';

// Mock
import LinkHelpMock from '@mock/LinkHelpMock';

// Icons
import ArrowVIcon from '@assets/svg/arrowv';
import ArrowIcon from '@assets/svg/arrow';

// API
import ApiShopping from '@modules/api/api-shopping';

// Utils
import DeviceStorage from '@modules/services/device-storage';
import { convertToPriceText, calcTotalQuantityCart, changeStatusBar } from '@modules/utils';

// Redux
import { saveLengthCart } from '@redux/actions';

/** Styles */
import { WHITE } from '@assets/style/colors';
import DefaultStyles from '@assets/style/default';
import { SafeAreaView } from 'react-navigation';
import Styles from './styles';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textCep: '',
      delivery: {},
      loading: true,
      scrollY: new Animated.Value(0),
      cart: {
        items: [],
        totalPrice: 0.0,
      },
    };

    props.navigation.addListener('focus', () =>
      changeStatusBar('dark-content', WHITE)
    );
  }

  async componentDidMount() {
    this.getDelivery();

    try {
      const { data } = await ApiShopping.getBasket();

      await DeviceStorage.setItem('@BelshopApp:cart', data.basket);
      await this.getCart();
    } catch (error) {
      this.props.navigation.goBack();
    } finally {
      this.setState({ loading: false });
    }
  }

  getDelivery = async () => {
    const delivery = await DeviceStorage.getItem('@BelshopApp:delivery');
    if (delivery) this.setState({ delivery });
  };

  getCart = async () => {
    let lengthItens = 0;
    const cart = await DeviceStorage.getItem('@BelshopApp:cart');

    if (cart) {
      const { items } = cart;

      if (!items.length) cart.items = [];
      if (items.length) {
        lengthItens = calcTotalQuantityCart(items);
      }
    }

    this.props.saveLengthCart(lengthItens);
    this.setState({ cart });
  };

  selectQuantity = async (index, value, itemId) => {
    const { cart } = this.state;
    cart.items[index].quantity = value;

    this.setState({ loading: true });

    ApiShopping.basketUpdateItem(itemId, { quantity: Number(value) })
      .then(async ({ data }) => {
        await DeviceStorage.setItem('@BelshopApp:cart', data.basket);
        await this.getCart();
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleRemoveProduct = (itemId) => {
    this.setState({ loading: true });

    ApiShopping.basketDeleteItem(itemId)
      .then(async ({ data }) => {
        const { basket } = data;
        await DeviceStorage.setItem('@BelshopApp:cart', basket);
        await this.getCart();
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleSaveCep = (cep) => {
    this.setState({ textCep: cep, loading: true }, () => {
      let { textCep } = this.state;
      textCep = textCep.replace('-', '');

      ApiShopping.basketSetPostalCode({ postalCode: textCep })
        .then(async ({ data }) => {
          const { basket } = data;
          await DeviceStorage.setItem('@BelshopApp:cart', basket);
          await DeviceStorage.setItem('@BelshopApp:delivery', {
            postalCode: cep,
            ...basket.selectedDeliveryOption,
          });
          await this.getDelivery();
          await this.getCart();
        })
        .finally(() => this.setState({ loading: false }));
    });
  };

  handleClearCep = () => {
    this.setState({ textCep: '' });
  };

  render() {
    const { navigation } = this.props;
    const {
      cart,
      scrollY,
      loading,
      textCep,
      delivery,
    } = this.state;

    const HeaderTitleBottom = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 45,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 95,
      ],
      outputRange: [-60, 10, 10, 10],
      extrapolate: 'clamp',
    });

    const HeaderTitleLeft = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 45,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 95,
      ],
      outputRange: [16, 60, 60, 60],
      extrapolate: 'clamp',
    });

    const HeaderTitleSize = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      ],
      outputRange: [26, 18],
      extrapolate: 'clamp',
    });

    return (
      <>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
        <SafeAreaView style={DefaultStyles.viewGrey}>
          <View style={Styles.page}>
            <LinearGradient
              locations={[0.8, 1]}
              style={Styles.header}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0.9 }}
              colors={['#FFFFFF', 'rgba(255, 255, 255, 0)']}
            >
              <View style={Styles.contentHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={Styles.btnImageIcon}>
                    <ArrowVIcon />
                  </View>
                </TouchableOpacity>
                <Animated.View
                  style={[
                    Styles.ContainerTitle,
                    {
                      position: 'absolute',
                      left: HeaderTitleLeft,
                      bottom: HeaderTitleBottom,
                    },
                  ]}
                >
                  <Animated.Text
                    style={[
                      Styles.titlePage,
                      { fontSize: HeaderTitleSize, lineHeight: 26 }
                    ]}
                  >
                  Carrinho
                  </Animated.Text>
                </Animated.View>
                {cart.items.length > 0 && (
                <Animated.View
                  style={[
                    Styles.containerTitlePrice,
                    { position: 'absolute', bottom: HeaderTitleBottom },
                  ]}
                >
                  <Text style={Styles.TitleHeader}>
                    {convertToPriceText(cart.totalPrice)}
                  </Text>
                </Animated.View>
                )}
              </View>
            </LinearGradient>
            {loading && (
            <View style={DefaultStyles.loading}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
            )}
            <ScrollView
              alwaysBounceVertical
              scrollEventThrottle={16}
              keyboardShouldPersistTaps="always"
              scrollEnabled={!!cart.items.length}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={Styles.containerScroll}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        y: scrollY,
                      },
                    },
                  },
                ],
                {
                  listener: this.handleOnScroll,
                }
              )}
            >
              {cart.items.length > 0 ? (
                <>
                  <Section style={Styles.container}>
                    <CardCartProduct
                      cart={cart}
                      textCep={textCep}
                      delivery={delivery}
                      handleSaveCep={this.handleSaveCep}
                      handleClearCep={this.handleClearCep}
                      selectQuantity={this.selectQuantity}
                      removeProduct={this.handleRemoveProduct}
                    />
                    <PriceTotal totalPrice={cart.totalPrice} />
                    <PaymentBanner />
                  </Section>
                  <View style={Styles.LinkHelp}>
                    <LinkHelp data={LinkHelpMock} />
                  </View>
                </>
              ) : (
                <>
                  {loading ? (
                    <View style={DefaultStyles.loading}>
                      <ActivityIndicator size="large" color="#ffffff" />
                    </View>
                  ) : (
                    <Section style={[Styles.container, Styles.containerNotFound]}>
                      <Text style={Styles.titlePageNotFound}>
                      Você ainda não adicionou produtos em seu carrinho
                      </Text>
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={Styles.btnNotFound}>
                          <Text style={{ marginRight: 8 }}>Continue comprando</Text>
                          <ArrowIcon />
                        </View>
                      </TouchableOpacity>
                    </Section>
                  )}
                </>
              )}
            </ScrollView>
            {cart.items.length > 0 && <FloatCartButton navigation={navigation} />}
          </View>
        </SafeAreaView>
      </>
    );
  }
}

Cart.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ saveLengthCart }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Cart);
