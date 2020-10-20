import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={props.size} height={props.size} {...props}>
    <G id="💎-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G id="Icon-/-f-delete-red---16px" fill="#FB0B17">
        <G id="f-delete">
          <Path d="M8,0 C3.58866667,0 0,3.58866667 0,8 C0,12.4113333 3.58866667,16 8,16 C12.4113333,16 16,12.4113333 16,8 C16,3.58866667 12.4113333,0 8,0 Z M12,9.33333333 L4,9.33333333 L4,6.66666667 L12,6.66666667 L12,9.33333333 Z" id="Shape" />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
