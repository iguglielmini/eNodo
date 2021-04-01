import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, Mask } from 'react-native-svg';

const Schedule = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Mask
      id="path-1-inside-1"
      fill="white"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.30189 23H18.6981C21.074 23 22 22.0639 22 19.6757V11.5H2V19.6757C2 22.0639 2.92602 23 5.30189 23ZM2 10V7.32432L2.00002 3H22V7.32432V10H2Z"
      />
    </Mask>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.30189 23H18.6981C21.074 23 22 22.0639 22 19.6757V11.5H2V19.6757C2 22.0639 2.92602 23 5.30189 23ZM2 10V7.32432L2.00002 3H22V7.32432V10H2Z"
      fill={color}
    />
    <Path
      d="M22 11.5H23.5V10H22V11.5ZM2 11.5V10H0.5V11.5H2ZM2 10H0.5V11.5H2V10ZM2 7.32432L0.5 7.32432V7.32432H2ZM2.00002 3V1.5H0.500023L0.500017 2.99999L2.00002 3ZM22 3H23.5V1.5H22V3ZM22 10V11.5H23.5V10H22ZM18.6981 21.5H5.30189V24.5H18.6981V21.5ZM20.5 19.6757C20.5 20.7327 20.2843 21.067 20.1753 21.1768C20.0691 21.2839 19.7441 21.5 18.6981 21.5V24.5C20.028 24.5 21.354 24.2481 22.3047 23.29C23.2526 22.3348 23.5 21.0069 23.5 19.6757H20.5ZM20.5 11.5V19.6757H23.5V11.5H20.5ZM22 10H2V13H22V10ZM3.5 19.6757V11.5H0.5V19.6757H3.5ZM5.30189 21.5C4.25594 21.5 3.93092 21.2839 3.8247 21.1768C3.71566 21.067 3.5 20.7327 3.5 19.6757H0.5C0.5 21.0069 0.74735 22.3348 1.69528 23.29C2.64604 24.2481 3.97196 24.5 5.30189 24.5V21.5ZM3.5 10V7.32432H0.5V10H3.5ZM3.5 7.32433L3.50002 3.00001L0.500017 2.99999L0.5 7.32432L3.5 7.32433ZM2.00002 4.5H22V1.5H2.00002V4.5ZM20.5 3V7.32432H23.5V3H20.5ZM20.5 7.32432V10H23.5V7.32432H20.5ZM2 11.5H22V8.5H2V11.5Z"
      fill={color}
      mask="url(#path-1-inside-1)"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 1H8.5V7H7V1ZM17 1H15.5V7H17V1Z"
      fill={color}
    />
    <Path
      d="M7 4H8.5V7H7V4Z"
      fill="white"
    />
    <Path
      d="M15.5 4H17V7H15.5V4Z"
      fill="white"
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
