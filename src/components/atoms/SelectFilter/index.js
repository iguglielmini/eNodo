import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// icons
import IconClose from '@assets/svg/close';

/** Styles */
import Styles from './styles';

function SelectFilter({ data, selected, onSelect }) {
  return (
    data.map((item, index) => {
      const key = index;
      return (
        <TouchableOpacity key={key} onPress={() => onSelect(item.value)}>
          <View style={selected.includes(item.value) ? Styles.btnActive : Styles.btnInactive}>
            <Text>{item.label}</Text>
            {
                  selected.includes(item.value) && (
                    <View style={Styles.iconSpace}>
                      <IconClose />
                    </View>
                  )
                }
          </View>
        </TouchableOpacity>
      );
    })

  );
}

export default SelectFilter;
