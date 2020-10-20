import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 14 14" width={props.size} height={props.size} {...props}>
    <G id="💎-Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">
      <G id="Icon-/-System-/-Close" transform="translate(-5.000000, -5.000000)" fill-rule="nonzero">
        <Path d="M18.7,5.3 C18.3,4.9 17.7,4.9 17.3,5.3 L12,10.6 L6.7,5.3 C6.3,4.9 5.7,4.9 5.3,5.3 C4.9,5.7 4.9,6.3 5.3,6.7 L10.6,12 L5.3,17.3 C4.9,17.7 4.9,18.3 5.3,18.7 C5.5,18.9 5.7,19 6,19 C6.3,19 6.5,18.9 6.7,18.7 L12,13.4 L17.3,18.7 C17.5,18.9 17.8,19 18,19 C18.2,19 18.5,18.9 18.7,18.7 C19.1,18.3 19.1,17.7 18.7,17.3 L13.4,12 L18.7,6.7 C19.1,6.3 19.1,5.7 18.7,5.3 Z" id="Path" />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
