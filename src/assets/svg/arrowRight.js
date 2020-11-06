import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ArrowRight = ({ size, color }) => (
  <>
    <Svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 7 11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        stroke={color}
        strokeWidth="1.5"
        d="M2 2L5.75 5.76471L5.75 6L2 9.76471"
        strokeLinecap="square"
      />
    </Svg>
  </>
);

ArrowRight.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

ArrowRight.defaultProps = {
  size: 10,
  color: '#000000',
};

export default ArrowRight;
