import React from 'react';
import {
  View, Text, Image,
} from 'react-native';

// Styles
import ProductImage from '@assets/images/product1.png';
import Styles from './styles';
// Image

function CardCart() {
  return (
    <>
      <View style={Styles.contaniner}>
        {/* Image */}
        <View style={Styles.containerImage}>
          <Image style={Styles.image} source={ProductImage} />
        </View>
        {/* Text Title */}
        <View style={Styles.contaninerTitle}>
          <Text style={Styles.titleProduct}>
            Kérastase Genesis Anti-Chute Fortifiant - Sérum Finalizador - 90ml
          </Text>
          {/* Price */}
          <Text style={Styles.titlePrice}>
              R$ 305,23
          </Text>
        </View>
      </View>
    </>
  );
}

export default CardCart;
