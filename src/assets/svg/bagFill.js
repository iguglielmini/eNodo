import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";

const BagFill = ({ size, color }) => (
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
      d="M2.94436 6.75H21.0556L22.1891 21.25H1.81091L2.94436 6.75Z"
    />
    <Path
      stroke={color}
      stroke-width="1.5"
      d="M13.8099 2.25C14.3624 2.25 14.8614 2.47304 15.2242 2.83579C15.5869 3.19854 15.8099 3.69751 15.8099 4.25V6.75H7.80994V4.25C7.80994 3.69751 8.03297 3.19854 8.39572 2.83579C8.75847 2.47304 9.25744 2.25 9.80994 2.25H13.8099Z"
    />
  </Svg>
);

BagFill.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

BagFill.defaultProps = {
  size: 24,
  color: "#0D0D0D",
};

export default BagFill;
