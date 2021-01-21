import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity } from 'react-native';

// Utils
import { convertToPriceText } from '@modules/utils';

// Styles
import Styles from './styles';

function IntroCard({ price, title, image, onClick }) {
  return (
    <TouchableOpacity onPress={onClick} style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.price}>{convertToPriceText(price.current)}</Text>
      <Image source={{ uri: image }} resizeMode="cover" style={Styles.image} />
    </TouchableOpacity>
  );
}

IntroCard.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.objectOf(PropTypes.any).isRequired,
};

IntroCard.defaultProps = {
  onClick: () => {},
};

export default IntroCard;
