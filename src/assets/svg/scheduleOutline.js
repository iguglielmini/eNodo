import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Schedule = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      stroke={color}
      strokeWidth="1.5"
      d="M5.30189 22.25H18.6981C19.8151 22.25 20.3903 22.0249 20.7077 21.7051C21.0264 21.3839 21.25 20.8013 21.25 19.6757V3.75H2.75002L2.75 19.6757C2.75 20.8013 2.97358 21.3839 3.29235 21.7051C3.6097 22.0249 4.18495 22.25 5.30189 22.25Z"
    />
    <Path
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="square"
      d="M4.25 10.7261H20.9167"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 1H7V7H8.5V1ZM17 1H15.5V7H17V1Z"
    />
  </Svg>
);

Schedule.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Schedule.defaultProps = {
  size: 22,
  color: '#0D0D0D',
};

export default Schedule;
