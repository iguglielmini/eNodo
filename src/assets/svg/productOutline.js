import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const Product = ({ size, color }) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      d="M20.0392 11.595L20.0391 11.595L20.0379 11.608C19.9035 13.0194 18.718 14.0973 17.3003 14.0973H15.3204C13.9026 14.0973 12.7172 13.0194 12.5828 11.608L12.5829 11.608L12.5815 11.595L11.4602 1.66626H21.1605L20.0392 11.595ZM6.07759 10.8042V16.5024C6.07759 17.9736 4.88496 19.1663 3.41379 19.1663C1.94263 19.1663 0.75 17.9736 0.75 16.5024V10.8042H6.07759ZM19.7328 16.3559V18.4077H12.8879V16.3559H19.7328ZM5.31867 8.54462H1.50862V4.97662H5.31891L5.31867 8.54462ZM4.31034 0.75C4.44841 0.75 4.56033 0.861912 4.56034 0.999969C4.56034 0.999979 4.56034 0.99999 4.56034 1L4.56027 2.71698H2.26724V1.89655C2.26724 1.26332 2.78057 0.75 3.41379 0.75H4.31034Z"
    />
  </Svg>
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
