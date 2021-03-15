import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text, TouchableOpacity
} from 'react-native';

// Styles
import Styles from './styles';

function CategoryList({ data, navigation, theme }) {
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
            onPress={() => navigation.navigate('Category', { slug, title })}
          >
            <Image
              resizeMode="cover"
              style={Styles.containerImage}
              source={{ uri: item.image, width: 72, height: 72 }}
            />
            <Text style={[Styles.description, Styles[theme]]}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

CategoryList.propTypes = {
  theme: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

CategoryList.defaultProps = {
  theme: 'dark',
};
export default CategoryList;
