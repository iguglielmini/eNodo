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

const Title = ({ title, children, theme }) => (
  <View style={[Styles.container, Styles.flex, Styles.row]}>
    <Text style={[Styles.title, Styles[theme]]}>{title}</Text>
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
  children: PropTypes.arrayOf(PropTypes.element),
};

Title.defaultProps = {
  children: null,
  theme: 'light',
};

export default Title;
