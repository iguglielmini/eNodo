import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

// Icons
import IconCheck from '@assets/svg/check';
import IconArrowUp from '@assets/svg/arrowUp';
import IconArrowDonw from '@assets/svg/arrowDown';

/** Styles */
import Styles from './styles';

function DropDownSelect({ data, onSelect }) {
  const [dataList, setData] = useState(data.map(item => ({
    ...item,
    icon: () => item.selected && <IconCheck />,
  })));

  function select(item) {
    onSelect(item);
    setData(dataList.map(l => ({
      ...l,
      icon: () => l.value === item.value && <IconCheck />,
    })));
  }

  return (
    <DropDownPicker
      items={dataList}
      itemStyle={Styles.item}
      labelStyle={Styles.label}
      // dropDownStyle={Styles.dropdown}
      customArrowUp={() => <IconArrowUp />}
      onChangeItem={item => select(item)}
      customArrowDown={() => <IconArrowDonw />}
    />
  );
}

export default DropDownSelect;
