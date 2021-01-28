import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

/** Styles */
import Styles from './styles';

// Icons
import IconCheck from '../../../assets/svg/check';
import IconArrowDonw from '../../../assets/svg/arrowDown';
import IconArrowUp from '../../../assets/svg/arrowUp';

function DropDownSelect({ data, selected, onSelect }) {
  const newData = data.map((item, index) => ({
    ...item,
    selected: index === 0,
    icon: () => selected && selected.value === item.value && <IconCheck />,
  }));

  return (
    <DropDownPicker
      items={newData}
      itemStyle={Styles.item}
      labelStyle={Styles.label}
      dropDownStyle={Styles.dropdown}
      customArrowUp={() => <IconArrowUp />}
      onChangeItem={item => onSelect(item)}
      customArrowDown={() => <IconArrowDonw />}
    />
  );
}

export default DropDownSelect;
