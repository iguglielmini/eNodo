import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity } from 'react-native';

// Styles
import Styles from './styles';

function IntroCard({ data, onClick }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(data);
  });

  return (
    <TouchableOpacity onPress={() => onClick()} style={Styles.container}>
      <Text style={Styles.title}>{info && info.title}</Text>
      <Text style={Styles.price}>
        R$
        { info && info.price && info.price.current }
      </Text>
      <Image source={info && info.image} resizeMode="cover" style={Styles.image} />
    </TouchableOpacity>
  );
}

IntroCard.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

IntroCard.defaultProps = {
  onClick: () => {},
};

export default IntroCard;
