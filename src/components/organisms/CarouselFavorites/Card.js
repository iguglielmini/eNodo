import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

/* Styles */
import Styles from './styles';

function CardFavorites({ item, navigation }) {
  const { image } = item;

  return (
    <TouchableOpacity
      style={Styles.cardContainer}
      onPress={() => navigation.navigate('ProductDetails', { itemDetails: item })}
    >
      <Image
        style={Styles.cardImage}
        source={{ uri: image.url, ...image }}
      />
    </TouchableOpacity>
  );
}

export default CardFavorites;
