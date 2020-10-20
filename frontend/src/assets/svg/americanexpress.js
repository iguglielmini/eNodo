import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 48 48" {...props}>
    <Path
      fill="#1976D2"
      d="M45 35a4 4 0 01-4 4H7a4 4 0 01-4-4V13a4 4 0 014-4h34a4 4 0 014 4v22z"
    />
    <Path
      fill="#FFF"
      d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20h-2.745zm-12.12 3.915l1.026-2.44 1.066 2.44h-2.092zm27.748-.502L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21l-3.094-3.587zm-4.155 2.103h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897-1.916 2.103z"
    />
  </Svg>
);

export default SvgComponent;
