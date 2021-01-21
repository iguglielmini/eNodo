import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Text } from 'react-native';

// Styles
import Styles from './styles';

function ImageIntroCard({ image, title }) {
  return (
    <ImageBackground
      resizeMode="contain"
      source={{ uri: image }}
      style={Styles.container}
    >
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.description}>
        Esponja de microfibra antibaquiteriana
      </Text>
    </ImageBackground>
  );
}

ImageIntroCard.propsTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageIntroCard;
