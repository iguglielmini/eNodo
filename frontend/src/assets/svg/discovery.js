import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 23 23" {...props}>
    <G stroke="none" stroke-width="1" fill-rule="evenodd" opacity={props.opacity ? props.opacity : '0.300000012'} {...props}>
      <G transform="translate(-27.000000, -17.000000)" fill-rule="nonzero">
        <G transform="translate(27.000000, 17.000000)">
          <Path d="M23.061,20.939 L17.328,15.206 C20.0494304,11.3812248 19.3857055,6.10905629 15.8011981,3.07814957 C12.2166907,0.0472428527 6.90753675,0.268999449 3.5882681,3.5882681 C0.268999449,6.90753675 0.0472428527,12.2166907 3.07814957,15.8011981 C6.10905629,19.3857055 11.3812248,20.0494304 15.206,17.328 L20.939,23.061 L23.061,20.939 Z M3,10 C3,6.13400675 6.13400675,3 10,3 C13.8659932,3 17,6.13400675 17,10 C17,13.8659932 13.8659932,17 10,17 C6.13583434,16.9955914 3.00440864,13.8641657 3,10 Z" />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
