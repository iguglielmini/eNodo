import React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 22" {...props}>
    <G fill="none" stroke="#1A1A1A">
      <Path d="M.571 10.857s4.572-8 11.429-8 11.429 8 11.429 8-4.572 8-11.429 8-11.429-8-11.429-8z" />
      <Circle cx={12} cy={10.857} r={3.429} />
      <Path d="M1.714 21.143L22.286.57" />
    </G>
  </Svg>
);

export default SvgComponent;
