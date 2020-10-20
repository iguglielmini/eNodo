import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 20 24" strokeWidth={1.75} {...props}>
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
      <G transform="translate(-332.000000, -17.000000)" stroke={props.color}>
        <G transform="translate(330.000000, 17.000000)">
          <G transform="translate(3.000000, 1.000000)">
            <Path d="M12,14 L6,14 C2.686,14 0,16.686 0,20 L0,21 C0,21 3.125,22 9,22 C14.875,22 18,21 18,21 L18,20 C18,16.686 15.314,14 12,14 Z" id="Path" stroke={props.colore} stroke-width="2" />
            <Path d="M4,5 C4,2.239 6.239,0 9,0 C11.761,0 14,2.239 14,5 C14,7.761 11.761,11 9,11 C6.239,11 4,7.761 4,5 Z" id="Path" stroke={props.colore} stroke-width="2" />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
