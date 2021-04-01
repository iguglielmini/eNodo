import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { WHITE, BLACK } from '@assets/style/colors';

import ArrowIcon from '@assets/svg/arrow';

import Styles from './styles';

const ButtonSeeAll = ({
  theme, style, title, onPress, showArrow
}) => (
  <>
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.container}>
        <Text style={[Styles.textButton, Styles[theme], style]}>{title}</Text>
        {showArrow && (
          <ArrowIcon color={theme === 'dark' ? WHITE : BLACK} />
        )}
      </View>
    </TouchableOpacity>
  </>
);

ButtonSeeAll.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  theme: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  showArrow: PropTypes.bool,
};

ButtonSeeAll.defaultProps = {
  onPress: () => {},
  style: null,
  theme: 'dark',
  title: 'Ver Todos',
  showArrow: true,
};
export default ButtonSeeAll;
