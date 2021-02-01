import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import ArrowIcon from '@assets/svg/arrow';

import Styles from './styles';

const ButtonSeeAll = ({
  theme, style, title, onPress
}) => (
  <>
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.container}>
        <Text style={[Styles.textButton, Styles[theme], style]}>
          {title}
        </Text>
        <ArrowIcon color={theme === 'dark' ? '#ffffff' : '#000000'} />
      </View>
    </TouchableOpacity>
  </>
);

ButtonSeeAll.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  theme: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ButtonSeeAll.defaultProps = {
  onPress: () => {},
  style: null,
  theme: 'dark',
  title: 'Ver Todos',
};
export default ButtonSeeAll;
