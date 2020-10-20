import React from 'react';
import Svg, { Circle } from 'react-native-svg';

const SvgComponent = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx="5" cy="12" r="2" fill="#333333" />
    <Circle cx="12" cy="12" r="2" fill="#333333" />
    <Circle cx="19" cy="12" r="2" fill="#333333" />
  </Svg>
);

export default SvgComponent;
