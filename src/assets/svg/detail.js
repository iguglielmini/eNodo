import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Detail = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRrule="evenodd"
      d="M18.3334 1.58337V16.625H1.66669V14.6459H2.91669V15.4375H17.0834V2.77087H2.91669V3.56254H1.66669V1.58337H18.3334Z"
      fill={color}
    />
    <Path d="M6.66669 6.59338H1.66669" stroke={color} strokeWidth="1.5" />
    <Path d="M6.66669 12.135H1.66669" stroke={color} strokeWidth="1.5" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 4.35413L8.60702 6.5933L6.25 8.83247V4.35413Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 9.89587L8.60702 12.135L6.25 14.3742L6.25 9.89587Z"
      fill={color}
    />
  </Svg>
);

Detail.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Detail.defaultProps = {
  size: 22,
  color: '#000000',
};

export default Detail;
