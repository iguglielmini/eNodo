import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

// Icons
import IconCheck from '@assets/svg/check';
import IconArrowUp from '@assets/svg/arrowUp';
import IconArrowDonw from '@assets/svg/arrowDown';

/** Styles */
import Styles from './styles';

function DropDownSelect({ data, selected, onSelect }) {
  const newData = data.map((item, index) => {
    let select = false;
    let isFirst = index === 0;

    if (!selected && isFirst) {
      select = true;
      onSelect(item);
    }

    if (selected && selected.value === item.value) {
      select = true;
      isFirst = false;
    }

    return {
      ...item,
      selected: select,
      icon: () => select && <IconCheck />,
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
