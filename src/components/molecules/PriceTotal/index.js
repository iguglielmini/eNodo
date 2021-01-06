import React from 'react';
import { View, Text } from 'react-native';

// components
import Title from '@components/atoms/Title';

// Styles
import Styles from './styles';

function PriceTotal() {
  return (
    <>
      <View style={Styles.container}>
        <Title
          title="Total"
          styleFont={Styles.subTitle}
          style={Styles.itemText}
        />
        <View style={Styles.containerPrice}>
          <Title
            title="R$ 305,23"
            styleFont={Styles.subTitle}
            style={Styles.itemText}
          />
          <Text style={Styles.subTitlePrice}>em até 7x de R$ 43,60</Text>
        </View>
      </View>
    </>
  );
}

export default PriceTotal;
