import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 48 48" {...props}>
    <Path fill="#ff9800" d="M32 10a14 14 0 100 28 14 14 0 100-28z" />
    <Path fill="#d50000" d="M16 10a14 14 0 100 28 14 14 0 100-28z" />
    <Path
      fill="#ff3d00"
      d="M18 24c0 4.755 2.376 8.95 6 11.48 3.624-2.53 6-6.725 6-11.48s-2.376-8.95-6-11.48c-3.624 2.53-6 6.725-6 11.48z"
    />
  </Svg>
);

export default SvgComponent;
