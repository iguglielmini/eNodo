import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" fill={props.color} {...props}>
    <G id="💎-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G id="Lists-/-Icon-Label-Icon" transform="translate(0.000000, -19.000000)" fill="#D51648">
        <G id="Icon-/-System-/-Add--Green--24px" transform="translate(0.000000, 19.000000)">
          <G id="c-add-glyph-24">
            <Path d="M12,0 C5.372583,-4.05812251e-16 8.11624501e-16,5.372583 0,12 C-8.11624501e-16,18.627417 5.372583,24 12,24 C18.627417,24 24,18.627417 24,12 C23.9807773,5.38056166 18.6194383,0.0192227178 12,0 Z M18,13 L13,13 L13,18 L11,18 L11,13 L6,13 L6,11 L11,11 L11,6 L13,6 L13,11 L18,11 L18,13 Z" id="Shape" fill-rule="nonzero" />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
