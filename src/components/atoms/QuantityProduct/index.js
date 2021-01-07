import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";

/** Styles */
import Styles from "./styles";
// Icon
import IconArrowDonw from "../../../assets/svg/arrowDown";

function QuantityProduct({ cart, onSelect }) {
  const [selectItens, setData] = useState([]);

  useEffect(() => {
    const selectItensData = [];
    for (let qtd = 1; qtd <= 10; qtd++) {
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
            value={cart.quantity}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => onSelect(value)}
            Icon={() => <IconArrowDonw />}
            style={{
              iconContainer: Styles.iconContainer,
              viewContainer: Styles.viewContainer,
              pickerSelectStyles: Styles.pickerSelectStyles,
            }}
          />
          <Text style={Styles.quantyPrice}> R$ 305,23</Text>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <Text style={Styles.btnText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default QuantityProduct;
