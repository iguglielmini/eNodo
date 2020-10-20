import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.6095 6.35147C16.1302 6.8201 16.1302 7.5799 15.6095 8.04853L11.219 12L15.6095 15.9515C16.1302 16.4201 16.1302 17.1799 15.6095 17.6485C15.0888 18.1172 14.2446 18.1172 13.7239 17.6485L8.39052 12.8485C7.86983 12.3799 7.86983 11.6201 8.39052 11.1515L13.7239 6.35147C14.2446 5.88284 15.0888 5.88284 15.6095 6.35147Z" fill="#333333" />
  </Svg>
);

export default SvgComponent;
