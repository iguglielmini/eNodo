import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import ArrowIcon from '../../../assets/svg/arrow';

import Styles from './styles';

const ButtonSeeAll = ({ theme, style }) => {
  return (
    <>
      <TouchableOpacity onPress={() => {}}>
        <View style={Styles.container}>
          <Text style={[Styles.textButton, Styles[theme], style]}>
            Ver todos
          </Text>
          <ArrowIcon color={theme === 'dark' ? '#ffffff' : '#000000'} />
        </View>
      </TouchableOpacity>
    </>
  );
};

ButtonSeeAll.propTypes = {
  theme: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ButtonSeeAll.defaultProps = {
  style: null,
  theme: 'dark',
};
export default ButtonSeeAll;
