import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Line, Circle } from 'react-native-svg';

const SearchProduct = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 22 23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle
      cx="8.66139"
      cy="8.66139"
      r="7.91139"
      stroke={color}
      strokeWidth="1.5"
    />
    <Line
      x1="13.6927"
      y1="14.8367"
      x2="20.5303"
      y2="21.6743"
      stroke={color}
      strokeWidth="1.5"
    />
  </Svg>
);

SearchProduct.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

SearchProduct.defaultProps = {
  size: 22,
  color: '#0D0D0D',
};

export default SearchProduct;
