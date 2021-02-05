import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

// Icons
import IconCheck from '@assets/svg/check';
import IconArrowUp from '@assets/svg/arrowUp';
import IconArrowDonw from '@assets/svg/arrowDown';

/** Styles */
import Styles from './styles';

function DropDownSelect({ data, selected, onSelect }) {
  console.log('DROP OLD DATA', data);
  const newData = data.map((item, index) => {

    return {
      ...item,
      icon: () => item.selected && <IconCheck />,
    };
  });

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
