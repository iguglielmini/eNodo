import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg {...props}>
    <G id="💎-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G id="Header-/-closed---white" transform="translate(-24.000000, -23.000000)">
        <G id="Navigation-/-TopBar-/-IconLeft" fill={props.fill}>
          <G id="Icon-/-System-/-ArrowLeft-Small" transform="translate(16.000000, 20.000000)">
            <G id="ctrl-right" transform="translate(12.500000, 12.000000) scale(-1, 1) translate(-12.500000, -12.000000) translate(8.000000, 3.000000)">
              <Path d="M2.108,17.41 L0.59,16.108 L6.683,9 L0.59,1.892 L2.108,0.59 L8.759,8.35 C9.08,8.724 9.08,9.277 8.759,9.651 L2.108,17.41 Z" id="Path" fill-rule="nonzero" />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
