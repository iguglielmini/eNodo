import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import { convertToPriceText } from '@modules/utils';

// Icons
import FavoriteIcon from '@assets/svg/favorite';

// Styles
import Styles from './styles';

function CardMenusca({ item }) {
  const { image, title, price } = item;

  return (
    <View style={Styles.container}>
      <View style={Styles.listCardView}>
        <TouchableOpacity
          activeOpacity={1}
          style={Styles.card}
          onPress={() => () => {}}
        >
          <ImageBackground
            resizeMode="cover"
            style={Styles.containerImage}
            source={{ uri: image.url, ...image }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => () => {}}
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

        <TouchableOpacity
          activeOpacity={1}
          style={Styles.card}
          onPress={() => () => {}}
        >
          <ImageBackground
            resizeMode="cover"
            style={Styles.containerImage}
            source="https://d3kqa2vk8m4sbm.cloudfront.net/Custom/Content/Products/13/91/13918_keune-keratin-smooth-masc-200ml_s1_637497604247037359.png"
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => () => {}}
              style={Styles.favoriteBtn}
            >
              <FavoriteIcon size={18} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={Styles.contentDescription}>
            <Text style={Styles.description}>
              Dior Rouge 771 Radiand Matte - Batom Matte 3.5g
            </Text>
            <View style={Styles.priceContainer}>
              <Text style={[Styles.priceText, Styles.priceItem]}>R$ 30,00</Text>
              <Text style={[Styles.priceText, Styles.pricelater]}>R$35,00</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CardMenusca;
