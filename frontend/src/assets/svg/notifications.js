import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 22 24" strokeWidth={1.75} version="1.1" stroke={props.colore} {...props}>
    <G id="💎-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G id="Navigation-/-TabBar-/-Outline" transform="translate(-252.000000, -17.000000)">
        <G id="Icon-/-System-/-Notify-Outline" transform="translate(251.000000, 17.000000)">
          <G id="alarm-outline-24" transform="translate(3.000000, 1.000000)">
            <Path d="M16,12.0000001 L16,7.0000001 C16,3.13400679 12.8659932,1.04308128e-07 9,1.04308128e-07 C5.13400679,1.04308128e-07 2,3.13400679 2,7.0000001 L2,12.0000001 C1.97025682,14.4700471 1.27967688,16.8870769 -1.77635684e-15,19.0000001 L18,19.0000001 C16.7203231,16.8870769 16.0297432,14.4700471 16,12.0000001 L16,12.0000001 Z" id="Path" stroke-width="2" stroke-linecap="square" stroke={props.colore} />
            <Path d="M6.174,21 C6.59978745,22.1951025 7.73131371,22.9931614 9,22.9931614 C10.2686863,22.9931614 11.4002126,22.1951025 11.826,21 L6.174,21 Z" id="Path" fill={props.colore} fill-rule="nonzero" />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
