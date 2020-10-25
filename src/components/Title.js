import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  flex: {
    display: 'flex',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  row: {
    flexDirection: 'row',
  },
  actionButtons: {
    width: 82,
  },
  light: {
    color: '#000000',
  },
  dark: {
    color: '#ffffff',
  },
  container: {
    paddingHorizontal: 32,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

const Title = ({ title, children, theme, style, styleFont }) => (
  <View style={[Styles.container, Styles.flex, Styles.row, style]}>
    <Text style={[Styles.title, Styles[theme], styleFont]}>{title}</Text>
    {children && (
      <View style={[Styles.flex, Styles.row, Styles.actionButtons]}>
        {children}
      </View>
    )}
  </View>
);

Title.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  styleFont: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.arrayOf(PropTypes.element),
};

Title.defaultProps = {
  style: null,
  children: null,
  theme: 'light',
  styleFont: null,
};

export default Title;
