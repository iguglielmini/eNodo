import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Profile = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill={color}
      stroke={color}
      stroke-width="1.5"
      d="M3.36236 18.049C3.35716 14.4553 3.36866 10.3881 3.38203 6.4459C3.68395 3.24155 6.3878 0.766948 10.0834 0.750085C13.8403 0.732946 16.3572 3.32546 16.6208 6.77376C16.6194 8.14156 16.6242 9.60656 16.6292 11.1318C16.6365 13.348 16.6441 15.6915 16.634 18.049H3.36236Z"
    />
    <Path
      fill="white"
      stroke={color}
      stroke-width="1.5"
      d="M2.8099 17.0716L2.80992 17.0716C3.03002 16.9052 3.28034 16.7446 3.55031 16.5914L4.06397 16.325C4.87431 15.9379 5.81949 15.6344 6.86051 15.4289C7.67016 16.1571 8.87414 16.4887 10.0001 16.4887C11.1237 16.4887 12.3348 16.1583 13.1463 15.4305C14.1845 15.6372 15.1241 15.9418 15.9314 16.3304L16.4454 16.6042C16.7227 16.7627 16.9663 16.9148 17.1793 17.0773C18.2022 17.8574 18.75 18.8145 18.75 19.8748C18.75 20.2012 18.612 20.6608 18.3141 21.1011C18.0207 21.5347 17.6136 21.8878 17.145 22.0611L17.145 22.0611C16.847 22.1713 16.4031 22.231 15.6585 22.231L15.6552 22.231C12.5301 22.2449 7.33175 22.266 4.30795 22.231L4.29918 22.2309L4.29042 22.231C3.55602 22.2397 3.12472 22.1808 2.83609 22.0711C2.73599 22.0331 2.57528 21.9321 2.37443 21.7409C2.18105 21.5568 1.98402 21.3212 1.80701 21.0641C1.63001 20.8069 1.48355 20.5435 1.38403 20.3099C1.27832 20.0618 1.2504 19.9051 1.2504 19.8439H1.25048L1.25032 19.8329C1.2351 18.7956 1.77967 17.85 2.8099 17.0716Z"
    />
    <Path
      fill="white"
      stroke={color}
      stroke-width="1.5"
      d="M6.75445 11.6142L6.11173 12.0008L6.75445 11.6142C5.99204 10.3465 5.53823 8.78228 5.47884 7.40925C5.82475 7.3487 6.23153 7.24088 6.64681 7.10934C7.2934 6.90454 8.03798 6.61706 8.75402 6.2731C9.47232 5.92805 10.1764 5.51264 10.7554 5.07764C11.0931 4.82391 11.4217 4.53905 11.6843 4.23361C12.4497 5.21692 13.3976 6.19159 14.5249 7.16258C14.4856 8.59054 14.0342 10.2442 13.2445 11.5711C12.4093 12.9743 11.2771 13.8701 9.99965 13.886C8.7383 13.9017 7.60071 13.0213 6.75445 11.6142ZM14.5277 6.96032V6.96072V6.96032Z"
    />
  </Svg>
);

Profile.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Profile.defaultProps = {
  size: 22,
  color: '#0D0D0D',
};

export default Profile;
