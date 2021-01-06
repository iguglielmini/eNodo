import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ArrowV = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 10 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      stroke={color}
      strokeWidth="1.5"
      d="M7.99999 14L2 8L8 2"
      strokeLinecap="square"
    />
  </Svg>
);

ArrowV.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

ArrowV.defaultProps = {
  size: 22,
  color: '#000000',
};

export default ArrowV;
