import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 23 24" {...props}>
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="round">
      <G transform="translate(-1.000000, 0.000000)" stroke="#1A1A1A" stroke-width="2">
        <G transform="translate(2.000000, 1.000000)">
          <Path d="M16,13.6190476 L13,16.7619048 L5,8.38095238 L8,5.23809524 L3,0 L0,3.14285714 C0,13.5572381 8.059,22 18,22 L21,18.8571429 L16,13.6190476 Z" />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
