import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

/** Styles */
import Styles from './styles';

// Icons
import IconCheck from '../../../assets/svg/check';
import IconArrowDonw from '../../../assets/svg/arrowDown';
import IconArrowUp from '../../../assets/svg/arrowUp';

function DropDownSelect({ data, selected, onSelect }) {
  const newData = data.map(item => ({
    ...item,
    icon: () => selected
      && selected.value === item.value && (
        <IconCheck />
    ),
  }));

  return (
    <DropDownPicker
      customArrowUp={() => <IconArrowUp />}
      customArrowDown={() => <IconArrowDonw />}
      items={newData}
      itemStyle={Styles.item}
      labelStyle={Styles.label}
      dropDownStyle={Styles.dropdown}
      onChangeItem={item => onSelect(item)}
    />
  );
}

export default DropDownSelect;
