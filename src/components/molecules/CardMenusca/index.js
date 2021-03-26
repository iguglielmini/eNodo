import React from 'react';
import {
  View, ImageBackground, Text, TouchableOpacity
} from 'react-native';

import { convertToPriceText } from '@modules/utils';

// Icons
import FavoriteIcon from '@assets/svg/favorite';

// Styles
import Styles from './styles';

function CardMenusca({ item, navigation }) {
  const {
    image, title, price, id, slug, sku
  } = item;

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={Styles.card}
        onPress={() => navigation.navigate('ProductDetails', { slug, id, sku })}
      >
        <ImageBackground
          resizeMode="cover"
          style={Styles.containerImage}
          source={{ uri: image.url, ...image }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
            style={Styles.favoriteBtn}
          >
            <FavoriteIcon size={18} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={Styles.contentDescription}>
          <Text style={Styles.description}>{title}</Text>
          <View style={Styles.priceContainer}>
            <Text style={[Styles.priceText, Styles.priceItem]}>
              {convertToPriceText(price.current)}
            </Text>
            {price.previous && (
              <Text style={[Styles.priceText, Styles.pricelater]}>
                {convertToPriceText(price.previous)}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CardMenusca;
