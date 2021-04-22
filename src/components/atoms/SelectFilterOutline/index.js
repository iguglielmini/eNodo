import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

// icons
import IconClose from '@assets/svg/close';

/** Styles */
import Styles from './styles';

function SelectFilter({ data, onSelect }) {
  if (!data.length) return null;

  return data.map((item, index) => {
    const key = index;
    return (
      <TouchableOpacity key={key} onPress={() => onSelect(item.value)}>
        <View
          style={Styles.btn}
        >
          <Text>{item.label}</Text>
          <View style={Styles.iconSpace}>
            <IconClose onPress={() => onSelect(item.value)} />
          </View>
        </View>
      </TouchableOpacity>
    );
  });
}

SelectFilter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};

SelectFilter.defaultTypes = {
  data: [],
};

export default SelectFilter;
