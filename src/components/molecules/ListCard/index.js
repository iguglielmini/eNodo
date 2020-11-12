import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Mock
import CardlistMock from '../../../mock/CardListMock';
/* Components */
import Card from '../Card';
// Styles
import Styles from './styles';

function ListCard({ theme, navigation }) {
  function handleShowDetailProduct(id) {
    navigation.navigate('ProductDetails', { id });
  }

  return (
    <>
      <View style={Styles.container}>
        {CardlistMock.map((item, index) => {
          const key = index;
          const isOdd = key % 2 === 1;

          return (
            <Card
              key={key}
              item={item}
              theme={theme}
              onClick={() => handleShowDetailProduct(item.id)}
              style={{
                marginTop: isOdd ? 64 : 0,
                marginLeft: isOdd ? 25 : 0,
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
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

ListCard.defaultProps = {
  theme: 'light',
};

export default ListCard;
