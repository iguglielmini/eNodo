import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

/* Icons */
import FavoriteIcon from '../../assets/svg/favorite';

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
];

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 400,
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 5,
  },
  itemText: {
    color: '#000000',
    fontSize: 15,
    marginTop: 16,
    marginBottom: 24,
  },
  FavoriteBtn: {
    position: 'absolute',
    bottom: 15,
    right: 14,
  },
  containerImage: {
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    width: '100%',
    height: 200,
  },
  priceContainer: {
    backgroundColor: '#e5e5e5',
    marginTop: 24,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
  },
  priceItem: {
    color: '#db207f',
    fontSize: 14,
  },
  pricelater: {
    color: '#A1A6AF',
    fontSize: 14,
  },
});
const numColumns = 2;

function CardProduct() {
  const renderCardItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.containerImage}>
          <TouchableOpacity style={styles.FavoriteBtn} onPress={() => {}}>
            <FavoriteIcon name="Favorite" size={24} />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemText}>{item.titleProduct}</Text>
        <View styles={styles.priceContainer}>
          <Text style={styles.priceItem}>R$ {item.titlePrice}</Text>
          <Text style={styles.pricelater}>R$ {item.titlePriceLater}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          data={CardList}
          renderItem={renderCardItem}
          keyExtractor={(_, index) => index.toString()}
          numColumns={numColumns}
        />
      </View>
    </>
  );
}

export default CardProduct;
