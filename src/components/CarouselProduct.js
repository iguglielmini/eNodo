import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

/* Components */
import Slick from 'react-native-slick';

import ProductImage from '../assets/images/product1.png';

const Styles = StyleSheet.create({
  container: {
    height: 520,
    backgroundColor: '#ffffff',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
  },
});

const CarouselProduct = () => {
  return (
    <>
      <Slick
        autoplay
        showsButtons={false}
        style={Styles.container}
        activeDotColor="#0d0d0d"
        paginationStyle={Styles.dot}
      >
        <View style={Styles.cardContainer}>
          <Image source={ProductImage} />
        </View>
        <View style={Styles.cardContainer}>
          <Image source={ProductImage} />
        </View>
        <View style={Styles.cardContainer}>
          <Image source={ProductImage} />
        </View>
      </Slick>
    </>
  );
};

export default CarouselProduct;
