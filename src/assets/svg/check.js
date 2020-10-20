import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G transform="translate(-116.000000, -80.000000)" fill={props.fill}>
        <G transform="translate(35.000000, 80.000000)">
          <G transform="translate(81.000000, 0.000000)">
            <G>
              <Path d="M12,0 C5.372583,0 0,5.372583 0,12 C0,18.627417 5.372583,24 12,24 C18.627417,24 24,18.627417 24,12 C23.9807773,5.38056166 18.6194383,0.0192227178 12,0 Z M10,17.414 L4.586,12 L6,10.586 L10,14.586 L18,6.586 L19.414,8 L10,17.414 Z" fill-rule="nonzero" />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
