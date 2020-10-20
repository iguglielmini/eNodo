import React from 'react';
import Svg, {
  G, Path, Text, TSpan
} from 'react-native-svg';

const SvgComponent = props => (
  <Svg width="24px" height="24px" {...props}>
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G>
        <G>
          <Path d="M12,0 C5.383,0 0,5.383 0,12 C0,18.617 5.383,24 12,24 C18.617,24 24,18.617 24,12 C24,5.383 18.617,0 12,0 Z" fill={props.active ? '#1A1A1A' : '#AFB0B3'} fill-rule="nonzero" />
          <Text font-family="SFProDisplay-Bold, SF Pro Display" font-size="14" font-weight="bold" line-spacing="24" letter-spacing="-0.0875000013" fill="#FFFFFF">
            <TSpan x="8" y="17" style={{ fontWeight: 'bold' }}>$</TSpan>
          </Text>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
