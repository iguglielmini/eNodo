import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ImageBackground, TouchableOpacity
} from 'react-native';

/* Icons */
import BadgeIcon from '@assets/svg/badge';
import FavoriteIcon from '@assets/svg/favorite';
// Styles
import Styles from './styles';

function Card({
  item, style, theme, onClick, onClickFavorite
}) {
  return (
    <>
      <TouchableOpacity style={[Styles.card, style]} onPress={() => onClick()} activeOpacity={1}>
        <ImageBackground
          style={Styles.containerImage}
          source={item.image.url}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={Styles.favoriteBtn}
            onPress={() => onClickFavorite()}
            activeOpacity={1}
          >
            <FavoriteIcon size={24} />
          </TouchableOpacity>
        </ImageBackground>
        {item.price.discount && (
          <View style={Styles.discount}>
            <BadgeIcon size={48} />
            <Text style={Styles.discountText}>
              {item.price.discount}
              %
            </Text>
          </View>
        )}
        <Text style={[Styles[theme], Styles.description]}>
          {item.title}
        </Text>
        <View style={Styles.priceContainer}>
          <Text style={[Styles.priceText, Styles.priceItem]}>
            {item.price.current}
          </Text>
          <Text style={[Styles.priceText, Styles.pricelater]}>
            {item.price.previous}
          </Text>
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
