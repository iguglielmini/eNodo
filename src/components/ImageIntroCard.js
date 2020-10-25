import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Text, StyleSheet } from 'react-native';

import EsponjaImage from '../assets/images/esponja.png';

const Styles = StyleSheet.create({
  container: {
    width: 400,
    height: 375,
    padding: 32,
    marginLeft: 16,
    borderRadius: 5,
    marginVertical: 48,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  description: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '500',
    fontFamily: 'Inter',
  },
});

function ImageIntroCard() {
  return (
    <ImageBackground
      resizeMode="cover"
      source={EsponjaImage}
      style={Styles.container}
    >
      <Text style={Styles.title}>Pra maquiar</Text>
      <Text style={Styles.description}>
        Esponja de microfibra antibaquiteriana
      </Text>
    </ImageBackground>
  );
}

ImageIntroCard.propsTypes = {};

ImageIntroCard.defaultProps = {};

export default ImageIntroCard;
