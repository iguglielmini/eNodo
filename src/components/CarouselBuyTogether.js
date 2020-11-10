import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
// Libs
import Swiper from 'react-native-swiper';
/* Image mock */
import Porduct1 from '../assets/images/product/product1.png';
import Porduct2 from '../assets/images/product/6.png';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },

  wrapper: {},

  Card: {
    flex: 1,
  },
  cardProduct: {
    margin: 16,
    height: 230,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  ImageCard: {
    width: '100%',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#A1A6AF',
    justifyContent: 'space-around',
  },
  ImageProduct: {
    width: 75,
    height: 120,
  },
  circleText: {
    padding: 3,
    width: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#A1A6AF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 15,
  },
  priceText: {
    color: '#DB207F',
    fontSize: 15,
    paddingLeft: 8,
  },
  ImageTextPrice: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const CarouselBuyTogether = () => {
  return (
    <>
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          height={250}
          autoplay
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
          }}
          loop
        >
          <View style={styles.Card}>
            <View style={styles.cardProduct}>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={Porduct1} />
                <View style={styles.circleText}>
                  <Text style={styles.text}>+</Text>
                </View>
                <Image style={styles.ImageProduct} source={Porduct2} />
              </View>
              <View style={styles.ImageTextPrice}>
                <Text style={styles.text}>Compre os dois:</Text>
                <Text style={styles.priceText}>R$ 18,90</Text>
              </View>
            </View>
          </View>
          <View style={styles.Card}>
            <View style={styles.cardProduct}>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={Porduct1} />
                <View style={styles.circleText}>
                  <Text style={styles.text}>+</Text>
                </View>
                <Image style={styles.ImageProduct} source={Porduct2} />
              </View>
              <View style={styles.ImageTextPrice}>
                <Text style={styles.text}>Compre os dois:</Text>
                <Text style={styles.priceText}>R$ 18,90</Text>
              </View>
            </View>
          </View>
          <View style={styles.Card}>
            <View style={styles.cardProduct}>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={Porduct1} />
                <View style={styles.circleText}>
                  <Text style={styles.text}>+</Text>
                </View>
                <Image style={styles.ImageProduct} source={Porduct2} />
              </View>
              <View style={styles.ImageTextPrice}>
                <Text style={styles.text}>Compre os dois:</Text>
                <Text style={styles.priceText}>R$ 18,90</Text>
              </View>
            </View>
          </View>
        </Swiper>
      </View>
    </>
  );
};

export default CarouselBuyTogether;
