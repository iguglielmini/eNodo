import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  dark: {
    backgroundColor: '#000000',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  container: {
    paddingVertical: 48,
  },
});

const Section = ({ children, theme, style }) => (
  <View style={[Styles.container, Styles[theme], style]}>{children}</View>
);

Section.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  style: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any)
  ),
};

Section.defaultProps = {
  style: null,
  children: null,
  theme: 'transparent',
};

export default Section;
