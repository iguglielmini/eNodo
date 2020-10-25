import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/* Icons */
import FavoriteIcon from '../assets/svg/favorite';

const Styles = StyleSheet.create({
  card: {
    width: 175,
    maxHeight: 400,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 15,
    marginTop: 16,
    marginBottom: 24,
  },
  favoriteBtn: {
    right: 14,
    bottom: 15,
    position: 'absolute',
  },
  containerImage: {
    height: 200,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#e5e5e5',
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceItem: {
    fontSize: 15,
    color: '#db207f',
  },
  pricelater: {
    fontSize: 15,
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
});

function Card({ item, style, theme }) {
  return (
    <View style={[style, Styles.card]}>
      <View style={Styles.containerImage}>
        <TouchableOpacity style={Styles.favoriteBtn} onPress={() => {}}>
          <FavoriteIcon name="Favorite" size={24} />
        </TouchableOpacity>
      </View>
      <Text style={[Styles[theme], Styles.description]}>
        {item.titleProduct}
      </Text>
      <View style={Styles.priceContainer}>
        <Text style={Styles.priceItem}>R$ {item.titlePrice}</Text>
        <Text style={Styles.pricelater}>R$ {item.titlePriceLater}</Text>
      </View>
    </View>
  );
}

Card.propTypes = {
  theme: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

Card.defaultProps = {
  style: {},
  theme: 'light',
};

export default Card;
