import React from 'react';
import { View, Image } from 'react-native';

// components
import Title from '@components/atoms/Title';
// Image
import CartElo from '@assets/images/bannerCart/CartElo.png';
import CartVisa from '@assets/images/bannerCart/CartVisa.png';
import CartHiper from '@assets/images/bannerCart/CartHiper.png';
import CartMaestro from '@assets/images/bannerCart/CartMaestro.png';
import CartAmerican from '@assets/images/bannerCart/CartAmerican.png';

// Styles
import Styles from './styles';

function PaymentBanner() {
  return (
    <>
      <View style={Styles.container}>
        <Title
          title="Formas de pagamento"
          styleFont={Styles.subTitle}
          style={Styles.itemText}
        />
        <View style={Styles.containerBanner}>
          <Image source={CartVisa} />
          <Image source={CartMaestro} />
          <Image source={CartAmerican} />
          <Image source={CartElo} />
          <Image source={CartHiper} />
        </View>
      </View>
    </>
  );
}

export default PaymentBanner;
