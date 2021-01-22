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
  children: PropTypes.element,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Section.defaultProps = {
  style: null,
  children: null,
  theme: 'transparent',
};

export default Section;
