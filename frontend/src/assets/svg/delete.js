import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg {...props} width="24" height="24" viewBox="0 0 24 24">
    <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
    <Path fill="none" d="M0 0h24v24H0V0z" />
  </Svg>
);

export default SvgComponent;
