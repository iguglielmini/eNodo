import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Line, Circle } from 'react-native-svg';

const Search = ({ size, color }) => (
  <Svg
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx="5.5" cy="8.5" r="5.5" stroke={color} strokeWidth="1.5" />
    <Line
      x1="8.88848"
      y1="12.2278"
      x2="13.2304"
      y2="16.5697"
      stroke={color}
      strokeWidth="1.5"
    />
    <Line
      x1="14"
      y1="7.25"
      x2="23"
      y2="7.25"
      stroke={color}
      strokeWidth="1.5"
    />
    <Line
      x1="16"
      y1="13.25"
      x2="23"
      y2="13.25"
      stroke={color}
      strokeWidth="1.5"
    />
    <Line
      x1="3"
      y1="19.25"
      x2="23"
      y2="19.25"
      stroke={color}
      strokeWidth="1.5"
    />
  </Svg>
);

Search.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Search.defaultProps = {
  size: 22,
  color: '#0D0D0D',
};

export default Search;
