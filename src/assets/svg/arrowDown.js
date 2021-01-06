import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ArrowDown = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 11 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      stroke={color}
      strokeWidth="1.5"
      d="M2 2L5.76471 5.75H6L9.76471 2"
      strokeLinecap="square"
    />
  </Svg>
);

ArrowDown.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

ArrowDown.defaultProps = {
  size: 11,
  color: '#000000',
};

export default ArrowDown;
