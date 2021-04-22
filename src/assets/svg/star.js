import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Star = ({ size, fill, stroke }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 15 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill={fill}
      stroke={stroke}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.70634 11L4.17963 12.8541L4.85318 8.92705L2 6.1459L5.94298 5.57295L7.70634 2L9.46971 5.57295L13.4127 6.1459L10.5595 8.92705L11.233 12.8541L7.70634 11Z"
    />
  </Svg>
);

Star.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

Star.defaultProps = {
  size: 15,
  fill: '#FF2BB7',
  stroke: '#FF2BB7',
};

export default Star;
