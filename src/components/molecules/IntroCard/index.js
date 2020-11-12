import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity } from 'react-native';

// Image Mock
import EsmalteImage from '../../../assets/images/esmalte.png';

// Styles
import Styles from './styles';

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
