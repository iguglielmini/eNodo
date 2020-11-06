import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

// image Mock
import imageProduct from '../assets/images/product/Image02.png';
import imageProduct1 from '../assets/images/product/7.png';
import imageProduct2 from '../assets/images/product/6.png';
import imageProduct3 from '../assets/images/product/3.png';
/* Components */
import Card from './Card';

const CardList = [
  {
    id: 1,
    titleProduct: 'Salon Line shampoo Meu Liso Extremo Taciele Alcolea 300 ml',
    titlePrice: '22,90',
    titlePriceLater: '25,90',
    imgStart: imageProduct,
    discount: '15',
  },
  {
    id: 2,
    titleProduct: 'Moroccanoil Volume Extra - Condicionador 250ml',
    titlePrice: '22,90',
    titlePriceLater: '25,90',
    imgStart: imageProduct1,
    discount: '10',
  },
  {
    id: 3,
    titleProduct: 'Moroccanoil Volume Extra - Condicionador 250ml',
    titlePrice: '22,90',
    titlePriceLater: '25,90',
    imgStart: imageProduct2,
    discount: '20',
  },
  {
    id: 4,
    discount: 20,
    titleProduct: 'Moroccanoil Volume Extra - Condicionador 250ml',
    titlePrice: '22,90',
    titlePriceLater: '25,90',
    imgStart: imageProduct3,
  },
];

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

function ListCard({ theme, navigation }) {
  function handleShowDetailProduct(id) {
    navigation.navigate('ProductDetails', { id });
  }

  return (
    <>
      <View style={Styles.container}>
        {CardList.map((item, index) => {
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
