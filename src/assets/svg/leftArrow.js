import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
    <G stroke="none" strokeWidth="1" fill-rule="evenodd">
      <G transform="translate(-16.000000, -20.000000)">
        <G transform="translate(16.000000, 20.000000)">
          <Path d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M10.4142136,12 L14.7071068,7.70710678 C15.0976311,7.31658249 15.0976311,6.68341751 14.7071068,6.29289322 C14.3165825,5.90236893 13.6834175,5.90236893 13.2928932,6.29289322 L8.29289322,11.2928932 C7.90236893,11.6834175 7.90236893,12.3165825 8.29289322,12.7071068 L13.2928932,17.7071068 C13.6834175,18.0976311 14.3165825,18.0976311 14.7071068,17.7071068 C15.0976311,17.3165825 15.0976311,16.6834175 14.7071068,16.2928932 L10.4142136,12 Z" />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;