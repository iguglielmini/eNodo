import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={props.size} height={props.size} {...props}>
    <G id="💎-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G id="Lists-/-Model-4" transform="translate(-46.000000, -54.000000)" fill="#1BA554">
        <G id="Icon-/-System-/-Add---Green" transform="translate(46.000000, 54.000000)">
          <G id="c-add-glyph-16">
            <Path d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M12,9 L9,9 L9,12 L7,12 L7,9 L4,9 L4,7 L7,7 L7,4 L9,4 L9,7 L12,7 L12,9 Z" id="Shape" fill-rule="nonzero" />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
