import React, { Component } from 'react';
import Svg, { G, Path, Ellipse } from 'react-native-svg';

// eslint-disable-next-line react/prefer-stateless-function
export default class WalletSvgComponent extends Component {
  render() {
    const { size, color, ...rest } = this.props;

    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} strokeWidth={1.75} fill={color} {...rest}>
        <G fill="none" transform="translate(1 1)">
          <Path d="M0 3v4c0 1.657 2.686 3 6 3s6-1.343 6-3V3" />
          <Path d="M0 7v4c0 1.657 2.686 3 6 3 1.537 0 2.938-.29 4-.765" />
          <Path d="M0 11v4c0 1.657 2.686 3 6 3 1.537 0 2.939-.289 4-.764" />
          <Ellipse cx={6} cy={3} rx={6} ry={3} />
          <Path d="M10 11v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4" />
          <Path d="M10 15v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4" />
          <Ellipse cx={16} cy={11} rx={6} ry={3} />
        </G>
      </Svg>
    );
  }
}
