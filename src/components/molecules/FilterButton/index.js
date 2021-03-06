import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';

// Styles
import Styles from './styles';

function FilterButton({ data, navigation }) {
  if (!data.length) return null;

  return (
    <View style={Styles.container}>
      {data.map((item, index) => {
        const key = index;
        const { slug, title } = item;
        return (
          <TouchableOpacity
            key={key}
            style={Styles.card}
            onPress={() => navigation.navigate('Filter', { slug, title })}
          >
            <Image
              resizeMode="cover"
              style={Styles.containerImage}
              source={{ uri: item.image, width: 72, height: 72 }}
            />
            <Text style={Styles.description}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

FilterButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

FilterButton.defaultProps = {
  onClick: () => {},
};

export default FilterButton;
