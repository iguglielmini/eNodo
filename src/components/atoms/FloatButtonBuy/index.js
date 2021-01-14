import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';

// Compoment
import ModalBuy from '@components/organisms/ModalBuy';

/** Styles */
import Styles from './styles';

function FloatButtonBuy({ navigation, addProductToCart }) {
  const [loading, setLoading] = useState(false);
  const [modalBuyVisible, setModalBuyVisible] = useState(false);

  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0.9 }}
        end={{ x: 0.0, y: 0.0 }}
        locations={[0.8, 1]}
        colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
        style={Styles.ContainerFloatButon}
      >
        <View style={Styles.priceDescription}>
          <View style={Styles.priceTitles}>
            <Text style={Styles.newPrice}>R$ 305,23</Text>
            <Text style={Styles.lastPrice}>R$ 398,90</Text>
          </View>
          <View style={Styles.HowPayment}>
            <Text>10x de R$ 30,52</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => addProductToCart(setLoading, setModalBuyVisible)}>
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

export default FloatButtonBuy;
