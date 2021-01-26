import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalBuy from '@components/organisms/ModalBuy';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';

// Utils
import { convertToPriceText } from '@modules/utils';

/** Styles */
import Styles from './styles';

function FloatButtonBuy({ navigation, addProductToCart, price }) {
  const [loading, setLoading] = useState(false);
  const [modalBuyVisible, setModalBuyVisible] = useState(false);
  const { current, previous } = price;

  return (
    <>
      <LinearGradient
        locations={[0.8, 1]}
        start={{ x: 0, y: 0.9 }}
        end={{ x: 0.0, y: 0.0 }}
        style={Styles.ContainerFloatButon}
        colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
      >
        <View style={Styles.priceDescription}>
          <View style={Styles.priceTitles}>
            <Text style={Styles.newPrice}>{convertToPriceText(current)}</Text>
            {previous > 0 && (
              <Text style={Styles.lastPrice}>
                {convertToPriceText(previous)}
              </Text>
            )}
          </View>
          <View style={Styles.HowPayment}>
            <Text>10x de R$ 30,52</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => addProductToCart(setLoading, setModalBuyVisible)}
        >
          <View style={Styles.buttonPayment}>
            <Text style={Styles.payTitleButton}>
              {loading ? 'Carregando...' : 'Comprar'}
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>

      <ModalBuy
        navigation={navigation}
        visible={modalBuyVisible}
        setVisible={setModalBuyVisible}
      />
    </>
  );
}

FloatButtonBuy.propTypes = {
  price: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FloatButtonBuy;
