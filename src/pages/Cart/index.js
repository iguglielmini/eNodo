import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
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
/** Styles */
import Styles from './styles';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: { quantity: '1' },
      scrollY: new Animated.Value(0),
      currentScrollY: 0,
    };
  }

  selectQuantity = (value) => {
    const { cart } = this.state;
    cart.quantity = value;
    this.setState({ cart });
  };

  handleOnScroll = ({ nativeEvent }) => {
    const { contentOffset } = nativeEvent;
    this.setState({ currentScrollY: Math.floor(contentOffset.y) });
  };

  render() {
    const { cart, scrollY, currentScrollY } = this.state;
    const { navigation, route } = this.props;

    const HeaderTitleBottom = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 45,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 95,
      ],
      outputRange: [-60, -30, -20, 10],
      extrapolate: 'clamp',
    });

    const HeaderTitleLeft = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 45,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 95,
      ],
      outputRange: [-0, -0, -0, 60],
      extrapolate: 'clamp',
    });
    return (
      <>
        <View style={{ flex: 1 }}>
          {/* Header */}
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.9 }}
            locations={[0.8, 1]}
            colors={['#FFFFFF', 'rgba(255, 255, 255, 0)']}
            style={Styles.ContainerHeader}
          >
            <View style={Styles.containerPrice}>
              <View style={Styles.headerButtons}>
                {/* Btn Go back */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={Styles.btnImageIcon}>
                    <ArrowVIcon />
                  </View>
                </TouchableOpacity>
                {/* Title header */}
                <Animated.View
                  style={[
                    Styles.ContainerTitle,
                    {
                      position: 'absolute',
                      bottom: HeaderTitleBottom,
                      left: HeaderTitleLeft,
                    },
                  ]}
                >
                  <Text
                    style={[
                      Styles.titlePage,
                      currentScrollY >= 125 && Styles.TitleHeader,
                    ]}
                  >
                    Carrinho
                  </Text>
                </Animated.View>
              </View>
              {/* Title Price */}
              <Animated.View
                style={[
                  Styles.containerTitlePrice,
                  { position: 'absolute', bottom: HeaderTitleBottom },
                ]}
              >
                <Text style={Styles.TitleHeader}>R$ 305,00</Text>
              </Animated.View>
            </View>
          </LinearGradient>
          {/* Header final */}
          {/* Cart product */}
          <ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            contentContainerStyle={Styles.ContainerScroll}
            keyboardShouldPersistTaps="always"
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ], {
              listener: this.handleOnScroll,
            })}
          >
            <Section style={Styles.Container}>
              {/* Card Product Cart */}
              <CardCartProduct
                cart={cart}
                selectQuantity={this.selectQuantity}
              />
              {/* Price Total */}
              <PriceTotal />
              {/* Payment */}
              <PaymentBanner />
            </Section>
            {/* Link Help */}
            <View style={Styles.LinkHelp}>
              <LinkHelp data={LinkHelpMock.LinkCart} />
            </View>
          </ScrollView>
          {/* Footer */}
          <FloatCartButton navigation={navigation} />
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
