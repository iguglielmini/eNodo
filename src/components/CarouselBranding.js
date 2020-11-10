import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

// Libs
import Swiper from 'react-native-swiper';

// Image Branding
import LogoLuv from '../assets/images/branding/LogoLuv.png';
import LogoMac from '../assets/images/branding/LogoMac.png';
import LogoWella from '../assets/images/branding/LogoWella.png';
import LogoLowell from '../assets/images/branding/LogoLowell.png';
import LogoInBeauty from '../assets/images/branding/LogoInbeauty.png';
import LogoLorealPro from '../assets/images/branding/LogoLorealPro.png';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    marginTop: 16,
  },

  wrapper: {},

  Card: {
    width,
    flex: 1,
    paddingLeft: 16,
  },
  cardBranding: {
    width,
    margin: 16,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ImageCard: {
    borderRadius: 10,
    padding: 16,
    marginRight: 15,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  ImageProduct: {
    width: width / 5,
    height: width / 5,
  },
});

const CarouselBranding = () => {
  return (
    <>
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          height={250}
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
            width,
            position: 'absolute',
            bottom: -23,
            left: width / 2 - 50,
          }}
          loop
        >
          <View style={styles.Card}>
            <View style={styles.cardBranding}>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoLuv} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoMac} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoWella} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoLowell} />
              </View>
            </View>
          </View>
          {/* 2 slider */}
          <View style={styles.Card}>
            <View style={styles.cardBranding}>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoLuv} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoMac} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoWella} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoLowell} />
              </View>
            </View>
          </View>
        </Swiper>
      </View>
    </>
  );
};

export default CarouselBranding;
