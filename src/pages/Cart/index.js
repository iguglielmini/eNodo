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

// Services
import { updateCartDelivery } from '@modules/services/delivery';

// Utils
import DeviceStorage from '@modules/services/device-storage';
import {
  convertToPriceText,
  calcTotalQuantityCart,
  changeStatusBar,
} from '@modules/utils';

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
    changeStatusBar('dark-content');
    this.state = {
      loading: true,
      scrollY: new Animated.Value(0),
      cart: {
        items: [],
        totalPrice: 0.0,
      },
    };
  }

  async componentDidMount() {
    changeStatusBar('dark-content', WHITE);

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

  handleSaveCep = async (cep) => {
    this.setState({ loading: true });

    try {
      await updateCartDelivery(cep);
      const { delivery } = this.props;
      await DeviceStorage.setItem('@BelshopApp:cart', delivery.basket);
      await this.getCart();
    } finally {
      this.setState({ loading: false });
    }
  };

  // handleClearCep = async () => {
  //   try {
  //     await clearCartDelivery();

  //     await DeviceStorage.setItem('@BelshopApp:cart', {
  //       ...this.state.cart,
  //       postalCode: null
  //     });

  //     await this.getCart();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    const { navigation } = this.props;
    const { cart, scrollY, loading } = this.state;

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
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
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
                      { fontSize: HeaderTitleSize, lineHeight: 26 },
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
                <ActivityIndicator size="large" color="#000000" />
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
              {cart.items.length > 0 && (
                <>
                  <Section style={Styles.container}>
                    <CardCartProduct
                      cart={cart}
                      handleSaveCep={this.handleSaveCep}
                      // handleClearCep={this.handleClearCep}
                      selectQuantity={this.selectQuantity}
                      removeProduct={this.handleRemoveProduct}
                    />
                    <PriceTotal cart={cart} />
                    <PaymentBanner />
                  </Section>
                  <View style={Styles.LinkHelp}>
                    <LinkHelp data={LinkHelpMock} />
                  </View>
                </>
              )}
              {!loading && !cart.items.length && (
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
            </ScrollView>
            {cart.items.length > 0 && (
              <FloatCartButton navigation={navigation} />
            )}
          </View>
        </SafeAreaView>
      </>
    );
  }
}

Cart.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = store => ({
  delivery: store.delivery,
});

const mapDispatchToProps = dispatch => bindActionCreators({ saveLengthCart }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
