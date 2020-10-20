import React from 'react';
import Svg, { Path } from 'react-native-svg';

const shareIcon = ({ width = 24, height = 20 }) => (
  <Svg width={width} height={height} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M14.4444 5.8V1L23 9.4L14.4444 17.8V12.88C8.33333 12.88 4.05556 14.8 1 19C2.22222 13 5.88889 7 14.4444 5.8Z" stroke="#0C7EE9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default shareIcon;
