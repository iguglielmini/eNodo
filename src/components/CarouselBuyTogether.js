import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
// Libs
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

/* Components */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  Card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 10,
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const Card = () => {
  return <></>;
};

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
            <Text style={styles.text}>tester</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    </>
  );
};

export default CarouselBuyTogether;
