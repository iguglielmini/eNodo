import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

/* Components */
import Card from './Card';

const CardList = [
  {
    id: 1,
    titleProduct: 'Salon Line shampoo Meu Liso Extremo Taciele Alcolea 300 ml',
    titlePrice: '22,90',
    titlePriceLater: '25,90',
    imgStart: '',
  },
  {
    id: 2,
    titleProduct: 'Moroccanoil Volume Extra - Condicionador 250ml',
    titlePrice: '22,90',
    titlePriceLater: '25,90',
    imgStart: '',
  },
  {
    id: 3,
    titleProduct: 'Moroccanoil Volume Extra - Condicionador 250ml',
    titlePrice: '22,90',
    titlePriceLater: '25,90',
    imgStart: '',
  },
  {
    id: 4,
    titleProduct: 'Moroccanoil Volume Extra - Condicionador 250ml',
    titlePrice: '22,90',
    titlePriceLater: '25,90',
    imgStart: '',
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

function ListCard({ theme }) {
  return (
    <>
      <View style={Styles.container}>
        {CardList.map((item, index) => {
          const key = index;

          if (key % 2 === 0)
            return <Card key={key} item={item} theme={theme} />;
          return (
            <Card
              key={key}
              item={item}
              theme={theme}
              style={{ marginTop: 64 }}
            />
          );
        })}
      </View>
    </>
  );
}

ListCard.propTypes = {
  theme: PropTypes.string,
};

ListCard.defaultProps = {
  theme: 'light',
};

export default ListCard;
