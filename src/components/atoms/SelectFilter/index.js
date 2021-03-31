import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import IconClose from '@assets/svg/close';
import ArrowIcon from '@assets/svg/arrow';
import config from '@/config';

// icons

/** Styles */
import Styles from './styles';

function SelectFilter({ data, selected, onSelect }) {
  if (!data.length) return null;
  const count = data.length;
  const [showMore, setShowMore] = useState(true);

  if (count > config.SHOW_ITEMS) {
    const firstItems = data.slice(0, config.SHOW_ITEMS);
    const lastItems = data.slice(config.SHOW_ITEMS, data.length);
    return (
      <>
        <View style={Styles.container}>
          {firstItems.map((item, index) => (
            <TouchableOpacity
              key={`List_${index.toString()}`}
              onPress={() => onSelect(item.value)}
            >
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
                    <IconClose onPress={() => onSelect(item.value)} />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {showMore && (
          <TouchableOpacity
            onPress={() => {
              setShowMore(false);
            }}
          >
            <View style={Styles.buttonWrapper}>
              <Text style={Styles.textButton}>Ver Todos</Text>
              <ArrowIcon color="#000000" />
            </View>
          </TouchableOpacity>
        )}
        {!showMore && (
          <View style={Styles.container}>
            {lastItems.map((item, index) => (
              <TouchableOpacity
                key={`List_${index.toString()}`}
                onPress={() => onSelect(item.value)}
              >
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
            ))}
          </View>
        )}
      </>
    );
  }

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
              <IconClose onPress={() => onSelect(item.value)} />
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
