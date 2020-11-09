import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

/* Icons */
import StarIcon from '../assets/svg/star';
import FavoriteIcon from '../assets/svg/favorite';

const { width } = Dimensions.get('window');

const Styles = StyleSheet.create({
  card: {
    width: width / 2 - 30,
    maxHeight: 400,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 15,
    marginTop: 16,
    marginBottom: 24,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  favoriteBtn: {
    right: 14,
    bottom: 15,
    position: 'absolute',
  },
  containerImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceText: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  priceItem: {
    color: '#db207f',
  },
  pricelater: {
    marginLeft: 10,
    color: '#A1A6AF',
    textDecorationLine: 'line-through',
  },
  dark: {
    color: '#ffffff',
  },
  light: {
    color: '#000000',
  },
  discount: {
    top: -24,
    right: 15,
    width: 48,
    height: 48,
    position: 'absolute',
  },
  discountText: {
    top: 14,
    left: 12,
    fontSize: 13,
    color: '#DB207F',
    fontWeight: '500',
    fontFamily: 'Inter',
    position: 'absolute',
  },
});

function Card({ item, style, theme, onClick, onClickFavorite }) {
  return (
    <>
      <TouchableOpacity style={[Styles.card, style]} onPress={() => onClick()}>
        <ImageBackground
          style={Styles.containerImage}
          source={item.imgStart}
          rizeMode="cover"
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
