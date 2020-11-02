import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

function ProductDetails({ route }) {
  const { id } = route.params;

  return (
    <>
      <View>
        <Text> Product Details</Text>
      </View>
    </>
  );
}

ProductDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
