import React from 'react';
import { ImageBackground, Text } from 'react-native';

// Image Mock
import EsponjaImage from '@assets/images/esponja.png';

// Styles
import Styles from './styles';

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

export default ImageIntroCard;
