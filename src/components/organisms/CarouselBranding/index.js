import React from 'react';
import { View, Image, Dimensions } from 'react-native';

// Libs
import Swiper from 'react-native-swiper';

// Image Branding
import LogoLuv from '../../../assets/images/branding/LogoLuv.png';
import LogoMac from '../../../assets/images/branding/LogoMac.png';
import LogoWella from '../../../assets/images/branding/LogoWella.png';
import LogoLowell from '../../../assets/images/branding/LogoLowell.png';
import LogoInBeauty from '../../../assets/images/branding/LogoInbeauty.png';
import LogoLorealPro from '../../../assets/images/branding/LogoLorealPro.png';
// Styles
import styles from './styles';

const { width } = Dimensions.get('window');

const CarouselBranding = () => {
  return (
    <>
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          height={275}
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
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoLowell} />
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
                <Image style={styles.ImageProduct} source={LogoLorealPro} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoWella} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoLowell} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoLowell} />
              </View>
              <View style={styles.ImageCard}>
                <Image style={styles.ImageProduct} source={LogoInBeauty} />
              </View>
            </View>
          </View>
        </Swiper>
      </View>
    </>
  );
};

export default CarouselBranding;
