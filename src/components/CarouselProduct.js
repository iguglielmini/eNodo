import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

/* Components */
import Slick from 'react-native-slick';
// Mock Image
import ProductImage from '../assets/images/product1.png';

// Dimension Responsive layout
const { width } = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    height: 520,
    backgroundColor: '#ffffff',
  },
  cardContainer: {
    height: 520,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    resizeMode: 'cover',
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
          <Image style={Styles.cardImage} source={ProductImage} />
        </View>
        <View style={Styles.cardContainer}>
          <Image style={Styles.cardImage} source={ProductImage} />
        </View>
        <View style={Styles.cardContainer}>
          <Image style={Styles.cardImage} source={ProductImage} />
        </View>
      </Slick>
    </>
  );
};

export default CarouselProduct;
