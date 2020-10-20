import React from 'react';
import Svg, { G, Path, Polygon } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 16 16" fill={props.color} {...props}>
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
      <G stroke="#1A1A1A">
        <G>
          <Polygon points="13 0.5 15.5 3 7.5 11 4 12 5 8.5" />
          <Path d="M11,2.5 L13.5,5" />
          <Path d="M13.5,9.5 L13.5,14.5 C13.5,15.052 13.052,15.5 12.5,15.5 L1.5,15.5 C0.948,15.5 0.5,15.052 0.5,14.5 L0.5,3.5 C0.5,2.948 0.948,2.5 1.5,2.5 L6.5,2.5" />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
