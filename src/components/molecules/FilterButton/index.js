import React from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {
  View, Text, TouchableOpacity
} from 'react-native';

// Styles
import Styles from './styles';

function FilterButton({ data, onClick }) {
  if (!data.length) return null;

  return (
    <View style={Styles.container}>
      {data.map((item, index) => {
        const key = index;
        return (
          <TouchableOpacity
            key={key}
            onPress={onClick}
            style={Styles.card}
          >
            <FastImage
              resizeMode="cover"
              style={Styles.containerImage}
              source={{ uri: item.image, priority: 'normal' }}
            />
            <Text style={Styles.description}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

FilterButton.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

FilterButton.defaultProps = {
  onClick: () => {},
};

export default FilterButton;
