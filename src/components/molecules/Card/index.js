import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

/* Icons */
import StarIcon from '../../../assets/svg/star';
import FavoriteIcon from '../../../assets/svg/favorite';
// Styles
import Styles from './styles';

function Card({ item, style, theme, onClick, onClickFavorite }) {
  return (
    <>
      <TouchableOpacity style={[Styles.card, style]} onPress={() => onClick()}>
        <ImageBackground
          style={Styles.containerImage}
          source={item.imgStart}
          resizeMode="cover"
        >
          {item.discount && (
            <View style={Styles.discount}>
              <StarIcon size={48} />
              <Text style={Styles.discountText}>{item.discount}%</Text>
            </View>
          )}
          <TouchableOpacity
            style={Styles.favoriteBtn}
            onPress={() => onClickFavorite()}
          >
            <FavoriteIcon size={24} />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={[Styles[theme], Styles.description]}>
          {item.titleProduct}
        </Text>
        <View style={Styles.priceContainer}>
          <Text style={[Styles.priceText, Styles.priceItem]}>
            R$ {item.titlePrice}
          </Text>
          <Text style={[Styles.priceText, Styles.pricelater]}>
            R$ {item.titlePriceLater}
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
