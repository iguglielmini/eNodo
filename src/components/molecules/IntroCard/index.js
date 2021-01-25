import React from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import { Text, Image, TouchableOpacity } from 'react-native';

// Utils
import { convertToPriceText } from '@modules/utils';

// Styles
import Styles from './styles';

function IntroCard({ price, title, image, onClick }) {
  const { url, width, height } = image;
  return (
    <TouchableOpacity onPress={onClick} style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.price}>{convertToPriceText(price.current)}</Text>
      <FastImage
        style={Styles.image}
        resizeMode="contain"
        source={{ uri: url, width, height, priority: "normal" }}
      />
    </TouchableOpacity>
  );
}

IntroCard.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  price: PropTypes.objectOf(PropTypes.any).isRequired,
};

IntroCard.defaultProps = {
  onClick: () => {},
};

export default IntroCard;
