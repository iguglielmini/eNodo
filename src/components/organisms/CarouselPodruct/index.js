import React from 'react';
import { View, Image } from 'react-native';

/* Components */
import Slick from 'react-native-slick';
// Mock Image
import ProductImage from '../../../assets/images/product1.png';
// Styles
import Styles from './styles';

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
