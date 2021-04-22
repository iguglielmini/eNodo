import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

/* Components */
import Card from '@components/molecules/Card';

// Styles
import Styles from './styles';

function ListCard({ data, theme, navigation }) {
  function handleShowDetailProduct(itemDetails) {
    navigation.navigate('ProductDetails', {
      itemDetails,
    });
  }

  if (!data.length) return null;

  return (
    <View style={Styles.container}>
      {data.map((item, index) => {
        const key = index;
        const isOdd = key % 2 === 1;

        return (
          <Card
            key={key}
            item={item}
            theme={theme}
            onClick={handleShowDetailProduct}
            style={{
              marginTop: isOdd ? 64 : 0,
              marginLeft: isOdd ? 15 : 0,
            }}
          />
        );
      })}
    </View>
  );
}

ListCard.propTypes = {
  theme: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

ListCard.defaultProps = {
  theme: 'light',
};

export default ListCard;
