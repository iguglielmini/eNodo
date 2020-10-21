import React from 'react';
import Svg, { G, Path, Ellipse } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={props.size || '24px'} height={props.size || '24px'} viewBox="0 0 24 24" {...props}>
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G fill={props.fill ? props.fill : '#D51648'} fill-rule="nonzero">
        <G>
          <Path d="M17,16 C14.049,16 11.597,15.361 10,14.288 C10,15.034 10,15.526 10,16 C10,17.657 13.134,19 17,19 C20.866,19 24,17.657 24,16 C24,15.526 24,15.034 24,14.288 C22.403,15.361 19.951,16 17,16 Z" />
          <Path d="M17,21 C14.049,21 11.597,20.361 10,19.288 C10,20.034 10,20.526 10,21 C10,22.657 13.134,24 17,24 C20.866,24 24,22.657 24,21 C24,20.526 24,20.034 24,19.288 C22.403,20.361 19.951,21 17,21 Z" />
          <Ellipse cx="17" cy="11" rx="7" ry="3" />
          <Ellipse cx="7" cy="3" rx="7" ry="3" />
          <Path d="M8,17.973 C7.673,17.989 7.341,18 7,18 C4.049,18 1.597,17.361 0,16.288 C0,17.034 0,17.526 0,18 C0,19.657 3.134,21 7,21 C7.34,21 7.673,20.986 8,20.966 L8,17.973 Z" />
          <Path d="M8,12.973 C7.673,12.989 7.341,13 7,13 C4.049,13 1.597,12.361 0,11.288 C0,12.034 0,12.526 0,13 C0,14.657 3.134,16 7,16 C7.34,16 7.673,15.986 8,15.966 L8,12.973 Z" />
          <Path d="M9.92,7.766 C9.018,7.916 8.042,8 7,8 C4.049,8 1.597,7.361 0,6.288 C0,7.034 0,7.526 0,8 C0,9.657 3.134,11 7,11 C7.341,11 7.674,10.986 8.003,10.966 C8.015,9.703 8.71,8.606 9.92,7.766 Z" />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;