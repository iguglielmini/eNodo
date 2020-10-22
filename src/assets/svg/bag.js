import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Bag = ({ size, color }) => (
  <>
    <Svg
      fill="none"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        stroke={color}
        stroke-width="1.5"
        d="M2.94436 6.75H21.0556L22.1891 21.25H1.81091L2.94436 6.75Z"
      />
    </Svg>
  </>
);

Bag.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Bag.defaultProps = {
  size: 22,
  color: '#0D0D0D',
};

export default Bag;
