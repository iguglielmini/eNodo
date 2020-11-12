import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Styles
import Styles from './styles';

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
