import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Styles
import { TitleLarge, TitleXLarge } from '@assets/style/typography';
import Styles from './styles';

const themeFont = {
  large: TitleLarge,
  xlarge: TitleXLarge
};


const Title = ({
  title, size, children, theme, style, styleFont
}) => (
  <View style={[Styles.container, Styles.flex, Styles.row, style]}>
    <Text style={[themeFont[size], Styles[theme], styleFont]}>{title}</Text>
    {children && (
      <View style={[Styles.flex, Styles.row, Styles.actionButtons]}>
        {children}
      </View>
    )}
  </View>
);

Title.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  size: PropTypes.oneOf(['large', 'xlarge']),
  styleFont: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.arrayOf(PropTypes.element),
};

Title.defaultProps = {
  title: '',
  style: null,
  size: 'large',
  children: null,
  theme: 'light',
  styleFont: null,
};

export default Title;
