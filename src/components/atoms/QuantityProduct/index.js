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
  const [selectItens, setData] = useState([]);

  useEffect(() => {
    const selectItensData = [];
    for (let qtd = 1; qtd <= 99; qtd += 1) {
      const item = { value: qtd.toString(), label: qtd.toString() };
      if (qtd === 1) item.selected = true;
      selectItensData.push(item);
    }
    setData(selectItensData);
  }, []);

  if (!selectItens.length) return null;

  return (
    <>
      <View style={Styles.containerAddProduct}>
        <View style={Styles.container}>
          <RNPickerSelect
            placeholder={{}}
            items={selectItens}
            value={String(quantity)}
            useNativeAndroidPickerStyle={false}
            onValueChange={value => onSelect(value)}
            Icon={() => <IconArrowDonw />}
            style={{
              iconContainer: Styles.iconContainer,
              viewContainer: Styles.viewContainer,
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
