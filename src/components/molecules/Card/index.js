import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

// Utils
import { convertToPriceText } from '@modules/utils';

// Icons
import BadgeIcon from '@assets/svg/badge';
import FavoriteIcon from '@assets/svg/favorite';

// Images
import NotFoundImage from '@assets/images/notfound.png';

// Styles
import Styles from './styles';

function Card({ item, style, theme, onClick, onClickFavorite }) {
  const { id, sku, title, price, image } = item;
  const { discount, current, previous } = price;

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={[Styles.card, style]}
        onPress={() => onClick(id, sku)}
      >
        <ImageBackground
          resizeMode="contain"
          style={Styles.containerImage}
          source={
            !image
              ? NotFoundImage
              : { uri: image.url, width: image.width, height: image.height }
          }
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={onClickFavorite}
            style={Styles.favoriteBtn}
          >
            <FavoriteIcon size={24} />
          </TouchableOpacity>
        </ImageBackground>
        {discount && (
          <View style={Styles.discount}>
            <BadgeIcon size={48} />
            <Text style={Styles.discountText}>{discount}%</Text>
          </View>
        )}
        <Text style={[Styles[theme], Styles.description]}>{title}</Text>
        <View style={Styles.priceContainer}>
          <Text style={[Styles.priceText, Styles.priceItem]}>
            {convertToPriceText(current)}
          </Text>
          {previous && (
            <Text style={[Styles.priceText, Styles.pricelater]}>
              {convertToPriceText(previous)}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

Card.propTypes = {
  theme: PropTypes.string,
  onClick: PropTypes.func,
  onClickFavorite: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

Card.defaultProps = {
  style: null,
  theme: 'light',
  onClick: () => {},
  onClickFavorite: () => {},
};

export default Card;
