import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { changeStatusBar } from '@modules/utils';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    props.navigation.addListener('focus', () =>
      changeStatusBar('dark-content')
    );
  }

  render() {
    return (
      <View>
        <Text>Product</Text>
      </View>
    );
  }
}

export default Product;
