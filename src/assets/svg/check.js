import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Check = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 13 9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M1 5.30769L4.23077 8L11.2308 1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
  </Svg>
);

Check.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Check.defaultProps = {
  size: 13,
  color: '#000000',
};

export default Check;
