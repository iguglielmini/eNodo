import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

/* Components */
import Card from '@components/molecules/Card';

// Styles
import Styles from './styles';

function ListCard({ data, theme, navigation }) {
  const [list, setList] = useState([]);

  function handleShowDetailProduct(id) {
    navigation.navigate('ProductDetails', { id });
  }

  useEffect(() => {
    setList(data);
  });

  return (
    <>
      <View style={Styles.container}>
        {list && list.length > 0 && list.map((item, index) => {
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
