import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M16.0001 0.666656C7.54533 0.666656 0.666748 7.54524 0.666748 16C0.666748 24.4547 7.54533 31.3333 16.0001 31.3333C24.4548 31.3333 31.3334 24.4547 31.3334 16C31.3334 7.54524 24.4548 0.666656 16.0001 0.666656Z" fill="#D51648" />
    <Path d="M16.0002 18.6667C16.3683 18.6667 16.6668 18.3682 16.6668 18V9.33332C16.6668 8.96516 16.3683 8.66666 16.0002 8.66666C15.632 8.66666 15.3335 8.96516 15.3335 9.33332V18C15.3335 18.3682 15.632 18.6667 16.0002 18.6667Z" fill="white" />
    <Path d="M16.0001 23.3333C16.7365 23.3333 17.3334 22.7364 17.3334 22C17.3334 21.2636 16.7365 20.6667 16.0001 20.6667C15.2637 20.6667 14.6667 21.2636 14.6667 22C14.6667 22.7364 15.2637 23.3333 16.0001 23.3333Z" fill="white" />
  </Svg>
);

export default SvgComponent;
