import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* Components */
import Slick from 'react-native-slick';

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
    backgroundColor: '#e5e5e5',
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
            <Text>SEDA</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>DOVE</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>SEDA</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>DOVE</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>SEDA</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>DOVE</Text>
          </View>
        </View>
        <View style={Styles.cardContainer}>
          <View style={Styles.CardMarcas}>
            <Text>SEDA</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>DOVE</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>SEDA</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>DOVE</Text>
          </View>
        </View>
        <View style={Styles.cardContainer}>
          <View style={Styles.CardMarcas}>
            <Text>SEDA</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>DOVE</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>SEDA</Text>
          </View>
          <View style={Styles.CardMarcas}>
            <Text>DOVE</Text>
          </View>
        </View>
      </Slick>
    </>
  );
};

export default CarouselBranding;
