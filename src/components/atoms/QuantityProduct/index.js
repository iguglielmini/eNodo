import React, { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, TouchableOpacity } from 'react-native';

// Icon
import IconArrowDonw from '@assets/svg/arrowDown';

// Utils
import { convertToPriceText } from '@modules/utils';

/** Styles */
import Styles from './styles';

function QuantityProduct({
  quantity, onSelect, price, removeProduct
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItensData = [];
    for (let qtd = 1; qtd <= 99; qtd += 1) {
      const item = { value: qtd.toString(), label: qtd.toString() };
      if (qtd === 1) item.selected = true;
      newItensData.push(item);
    }
    setItems(newItensData);
  }, []);

  if (!items.length) return null;

  return (
    <>
      <View style={Styles.containerAddProduct}>
        <View style={Styles.container}>
          <RNPickerSelect
            items={items}
            placeholder={{}}
            fixAndroidTouchableBug
            value={String(quantity)}
            useNativeAndroidPickerStyle={false}
            onValueChange={value => onSelect(value)}
            Icon={() => <IconArrowDonw />}
            style={{
              inputIOS: Styles.viewContainer,
              inputAndroid: Styles.viewContainer,
              iconContainer: Styles.iconContainer,
              pickerSelectStyles: Styles.pickerSelectStyles,
            }}
          />
          <Text style={Styles.quantyPrice}>
            {convertToPriceText(((price && price.current) || 0) * quantity)}
          </Text>
          {price && price.previous && (
            <Text style={Styles.quantyLastPrice}>
              {convertToPriceText(price.previous)}
            </Text>
          )}
        </View>

        <TouchableOpacity onPress={removeProduct}>
          <Text style={Styles.btnText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default QuantityProduct;
