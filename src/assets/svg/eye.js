import React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 18" {...props}>
    <G fill="none" stroke="#1A1A1A" transform="translate(0 -3)">
      <Path d="M.571 11.571s4.572-8 11.429-8 11.429 8 11.429 8-4.572 8-11.429 8-11.429-8-11.429-8z" />
      <Circle cx={12} cy={11.571} r={3.429} />
    </G>
  </Svg>
);

export default SvgComponent;
