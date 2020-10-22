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
  <View style={[style, Styles.container, Styles[theme]]}>{children}</View>
);

Section.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.element.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

Section.defaultProps = {
  style: {},
  theme: 'transparent',
};

export default Section;
