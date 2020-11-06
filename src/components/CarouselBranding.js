import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

/* Components */
import Slick from 'react-native-slick';

// Image Branding
import LogoLuv from '../assets/images/branding/LogoLuv.png';
import LogoMac from '../assets/images/branding/LogoMac.png';
import LogoWella from '../assets/images/branding/LogoWella.png';
import LogoLowell from '../assets/images/branding/LogoLowell.png';
import LogoInBeauty from '../assets/images/branding/LogoInbeauty.png';
import LogoLorealPro from '../assets/images/branding/LogoLorealPro.png';

const Styles = StyleSheet.create({
  container: {
    height: 320,
    marginTop: 46,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  CardMarcas: {
    width: 110,
    height: 104,
    margin: 8,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    left: 250,
    position: 'absolute',
  },
  activeDot: {
    backgroundColor: '#0D0D0D',
  },
});

const CarouselBranding = () => {
  return (
    <>
      <Slick
        showsButtons={false}
        style={Styles.container}
        paginationStyle={Styles.dot}
        activeDotColor="#0d0d0d"
      >
        <View style={Styles.cardContainer}>
          <View style={Styles.CardMarcas}>
            <Image source={LogoWella} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLuv} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLorealPro} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoInBeauty} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoMac} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLowell} />
          </View>
        </View>
        {/* 2 slider */}
        <View style={Styles.cardContainer}>
          <View style={Styles.CardMarcas}>
            <Image source={LogoWella} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLuv} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLorealPro} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoInBeauty} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoMac} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLowell} />
          </View>
        </View>
        {/* 3 Slider */}
        <View style={Styles.cardContainer}>
          <View style={Styles.CardMarcas}>
            <Image source={LogoWella} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLuv} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLorealPro} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoInBeauty} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoMac} />
          </View>
          <View style={Styles.CardMarcas}>
            <Image source={LogoLowell} />
          </View>
        </View>
      </Slick>
    </>
  );
};

export default CarouselBranding;
