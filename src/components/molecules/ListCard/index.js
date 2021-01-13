import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

/* Components */
import Card from '@components/molecules/Card';

// Styles
import Styles from './styles';

function ListCard({ data, theme, navigation }) {
  function handleShowDetailProduct(id, sku) {
    navigation.navigate('ProductDetails', { id, sku });
  }

  return (
    <>
      <View style={Styles.container}>
        {data && data.length > 0 && data.map((item, index) => {
          const key = index;
          const isOdd = key % 2 === 1;

          return (
            <Card
              key={key}
              item={item}
              theme={theme}
              onClick={() => handleShowDetailProduct(item.id, item.sku)}
              style={{
                marginTop: isOdd ? 64 : 0,
                marginLeft: isOdd ? 15 : 0,
              }}
            />
          );
        })}
      </View>
    </>
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
