import React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 25 24" strokeWidth={2} fill={props.color} {...props}>
    <G fill="none" transform="translate(1.5 1)">
      <Circle cx={11} cy={11} r={11} />
      <G transform="translate(6.6 6.6)">
        <Path d="M7.7 1.1L1.1 7.7" />
        <Circle cx={1.65} cy={1.65} r={1.65} />
        <Circle cx={7.15} cy={7.15} r={1.65} />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
