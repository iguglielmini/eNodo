import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M16.6666 8.2143C16.6666 12.2555 10.1189 18.8542 10.1189 18.8542C10.1189 18.8542 3.57129 12.2555 3.57129 8.2143C3.57129 4.07095 6.95511 1.66666 10.1189 1.66666C13.2828 1.66666 16.6666 4.07095 16.6666 8.2143Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
    <Path d="M10.1191 9.52372C10.8423 9.52372 11.4286 8.93743 11.4286 8.21419C11.4286 7.49096 10.8423 6.90466 10.1191 6.90466C9.39587 6.90466 8.80957 7.49096 8.80957 8.21419C8.80957 8.93743 9.39587 9.52372 10.1191 9.52372Z" fill="#1A1A1A" />
  </Svg>
);

export default SvgComponent;
