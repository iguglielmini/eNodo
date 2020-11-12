import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Arrow = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 15 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M0 6H13" stroke={color} strokeWidth="1.5" />
    <Path
      stroke={color}
      strokeWidth="1.5"
      d="M9.53029 1L13.5 6L9.50012 11.0001"
    />
  </Svg>
);

Arrow.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Arrow.defaultProps = {
  size: 22,
  color: '#000000',
};

export default Arrow;
