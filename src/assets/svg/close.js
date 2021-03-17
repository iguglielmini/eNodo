import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Close = ({ size, color, onPress }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    onPress={onPress}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M2 2L14 14" stroke={color} strokeWidth="1.5" />
    <Path stroke={color} strokeWidth="1.5" d="M14 2L2.00001 14" />
  </Svg>
);

Close.propTypes = {
  size: PropTypes.number,
  onPress: PropTypes.func,
  color: PropTypes.string,
};

Close.defaultProps = {
  size: 16,
  color: '#000000',
  onPress: () => {},
};

export default Close;
