import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import EsmalteImage from '../assets/images/esmalte.png';

const Styles = StyleSheet.create({
  container: {
    height: 260,
    padding: 32,
    width: '100%',
    borderRadius: 5,
    marginVertical: 20,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  title: {
    width: 140,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  price: {
    fontSize: 20,
    color: '#DB207F',
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  image: {
    top: 26,
    right: -1,
    position: 'absolute',
  },
});

function IntroCard({ onClick }) {
  return (
    <TouchableOpacity onPress={() => onClick()} style={Styles.container}>
      <Text style={Styles.title}>Kit Vult Batom 1 (3 Produtos)</Text>
      <Text style={Styles.price}>R$ 12,90</Text>
      <Image source={EsmalteImage} resizeMode="cover" style={Styles.image} />
    </TouchableOpacity>
  );
}

IntroCard.propTypes = {
  onClick: PropTypes.func,
};

IntroCard.defaultProps = {
  onClick: () => {},
};

export default IntroCard;
