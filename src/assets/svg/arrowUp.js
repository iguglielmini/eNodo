import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ArrowUp = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 11 6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      stroke={color}
      strokeWidth="1.5"
      d="M2 4.75L5.76471 1H6L9.76471 4.75"
      strokeLinecap="square"
    />
  </Svg>
);

ArrowUp.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

ArrowUp.defaultProps = {
  size: 11,
  color: '#000000',
};

export default ArrowUp;
