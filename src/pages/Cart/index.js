import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

/* Components */
import Section from "@components/atoms/Section";
import LinkHelp from "@components/atoms/LinkHelp";
import PriceTotal from "@components/molecules/PriceTotal";
import PaymentBanner from "@components/atoms/PaymentBanner";
import FloatCartButton from "@components/atoms/FloatCartButton";
import CardCartProduct from "@components/organisms/CardCartProduct";

// Mock
import LinkHelpMock from "@mock/LinkHelpMock";

// Icons
import ArrowVIcon from "@assets/svg/arrowv";

// API
import ApiCart from "../../modules/api/api-shopping";

// Utils
import { convertToPriceText } from "../../modules/utils";
import DeviceStorage from "../../modules/services/device-storage";

/** Styles */
import Styles from "./styles";

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScrollY: 0,
      scrollY: new Animated.Value(0),
      cart: {
        items: [
          {
            product: {
              id: 7482,
              sku: 1235,
              url:
                "l-oreal-professionnel-shampoo-absolut-repair-lipidium-300ml",
              slug:
                "l-oreal-professionnel-shampoo-absolut-repair-lipidium-300ml-p7482",
              title:
                "L'Oréal Professionnel Shampoo Absolut Repair Lipidium 300ml",
              image:
                "https://app-assets.belshop.com.br/l-oreal-professionnel-shampoo-absolut-repair-lipidium-300ml-p7482.png",
              link: "http://api-gateway.belshop.com.br/product/7482",
              price: {
                current: 79.9,
                previous: 99.9,
                discount: 20,
                installments: 4,
                installmentPrice: 19.98,
              },
            },
            id: 123,
            sku: 456,
            quantity: 2,
            basketItemId: 789,
            itemPrice: 19.9,
            totalPrice: 39.8,
          },
        ],
        totalPrice: 0.0,
      },
    };
  }

  componentDidMount() {
    this.getCart();
    ApiCart.getBasket().then((response) => {
      if (response && response.basket) {
        DeviceStorage.setItem("@CART", response);
        this.setState({ cart: response }, () => this.getCart());
      }
    });
  }

  async getCart() {
    const cart = await DeviceStorage.getItem("@CART");
    if (cart) this.setState({ cart });
  }

  selectQuantity = (index, value) => {
    const { cart } = this.state;

    cart.items[index].quantity = value;

    this.setState({ cart });
  };

  handleOnScroll = ({ nativeEvent }) => {
    const { contentOffset } = nativeEvent;
    this.setState({ currentScrollY: Math.floor(contentOffset.y) });
  };

  handleRemoveProduct = (index) => {
    const { cart } = this.state;
    cart.items.splice(index, 1);
    this.setState({ cart });
  };

  render() {
    const { navigation } = this.props;
    const { cart, scrollY, currentScrollY } = this.state;

    const HeaderTitleBottom = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 45,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 95,
      ],
      outputRange: [-60, 10, 10, 10],
      extrapolate: "clamp",
    });

    const HeaderTitleLeft = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 45,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 95,
      ],
      outputRange: [-0, 60, 60, 60],
      extrapolate: "clamp",
    });

    console.log("PICA ", cart);

    return (
      <>
        <View style={Styles.page}>
          <LinearGradient
            locations={[0.8, 1]}
            style={Styles.header}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.9 }}
            colors={["#FFFFFF", "rgba(255, 255, 255, 0)"]}
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
                    position: "absolute",
                    left: HeaderTitleLeft,
                    bottom: HeaderTitleBottom,
                  },
                ]}
              >
                <Text
                  style={[
                    Styles.titlePage,
                    currentScrollY >= 50 && Styles.TitleHeader,
                  ]}
                >
                  Carrinho
                </Text>
              </Animated.View>
              <Animated.View
                style={[
                  Styles.containerTitlePrice,
                  { position: "absolute", bottom: HeaderTitleBottom },
                ]}
              >
                <Text style={Styles.TitleHeader}>
                  {convertToPriceText(cart.totalPrice)}
                </Text>
              </Animated.View>
            </View>
          </LinearGradient>
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
                    selectQuantity={this.selectQuantity}
                    removeProduct={this.handleRemoveProduct}
                  />
                  <PriceTotal totalPrice={cart.totalPrice} />
                  <PaymentBanner />
                </Section>
                <View style={Styles.LinkHelp}>
                  <LinkHelp data={LinkHelpMock.LinkCart} />
                </View>
              </>
            ) : (
              <Section style={[Styles.container, Styles.containerNotFound]}>
                <Text style={Styles.titlePage}>"Seu carrinho está vazio"</Text>
              </Section>
            )}
          </ScrollView>
          {cart.items.length > 0 && <FloatCartButton navigation={navigation} />}
        </View>
      </>
    );
  }
}

Cart.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Cart;
