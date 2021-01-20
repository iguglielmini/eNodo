import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity
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
            <Image
              resizeMode="cover"
              source={{ uri: item.image }}
              style={Styles.containerImage}
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
