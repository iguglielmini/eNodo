import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import Styles from './styles';

const Section = ({ children, theme, style }) => (
  <View style={[Styles.container, Styles[theme], style]}>{children}</View>
);

Section.propTypes = {
  theme: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

Section.defaultProps = {
  style: null,
  children: null,
  theme: 'transparent',
};

export default Section;
