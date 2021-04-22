import React from 'react';
import { View/* , Text */ } from 'react-native';

// Components
import Title from '@components/atoms/Title';

// Utils
import { convertToPriceText } from '../../../modules/utils';

// Styles
import Styles from './styles';

const PriceTotal = ({ cart }) => {
  const { totalPrice } = cart;

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
            style={Styles.itemText}
            styleFont={Styles.subTitle}
            title={convertToPriceText(totalPrice)}
          />
          {/* <Text style={Styles.subTitlePrice}>em até 7x de R$ 43,60</Text> */}
        </View>
      </View>
    </>
  );
};

export default PriceTotal;
