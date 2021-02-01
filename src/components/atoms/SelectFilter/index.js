import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

// icons
import IconClose from '@assets/svg/close';

/** Styles */
import Styles from './styles';

function SelectFilter({ data, selected, onSelect }) {
  if (!data.length) return null;

  return data.map((item, index) => {
    const key = index;
    return (
      <TouchableOpacity key={key} onPress={() => onSelect(item.value)}>
        <View
          style={
            selected.includes(item.value)
              ? Styles.btnActive
              : Styles.btnInactive
          }
        >
          <Text>{item.label}</Text>
          {selected.includes(item.value) && (
            <View style={Styles.iconSpace}>
              <IconClose />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  });
}

SelectFilter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  selected: PropTypes.arrayOf(PropTypes.any).isRequired,
};

SelectFilter.defaultTypes = {
  data: [],
};

export default SelectFilter;
