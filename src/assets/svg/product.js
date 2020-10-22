import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Product = ({ size, color }) => (
  <>
    <Svg
      fill="none"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.82759 10.0542V16.5024C6.82759 18.3878 5.29918 19.9163 3.41379 19.9163C1.52841 19.9163 0 18.3878 0 16.5024V10.0542H6.82759ZM20.4828 15.6059V19.1577H12.1379V15.6059H20.4828ZM22 0.91626L20.7845 11.6791C20.6134 13.4755 19.1047 14.8473 17.3003 14.8473H15.3204C13.516 14.8473 12.0073 13.4755 11.8362 11.6791L10.6207 0.91626H22ZM6.06897 4.22662L6.06862 9.29462H0.758621V4.22662H6.06897ZM4.31034 0C4.86263 0 5.31034 0.447715 5.31034 1L5.31024 3.46698H1.51724V1.89655C1.51724 0.849108 2.36635 0 3.41379 0H4.31034Z"
      />
    </Svg>
  </>
);

Product.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Product.defaultProps = {
  size: 22,
  color: '#0D0D0D',
};

export default Product;
