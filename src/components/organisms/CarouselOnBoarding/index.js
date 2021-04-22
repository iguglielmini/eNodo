import React, { useState } from 'react';
import {
  SafeAreaView, Dimensions
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Component
import CardOnBoarding from './card';

// Styles
import Styles from './styles';

const { width } = Dimensions.get('window');

function CarouselOnBoarding({ data, navigation }) {
  const [indexDot, setDotIndex] = useState(0);

  return (
    <SafeAreaView style={Styles.content}>
      <Carousel
        data={data}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={({ index, item }) => (
          <CardOnBoarding
            key={index}
            item={item}
            navigation={navigation}
          />
        )}
        itemWidth={width}
        sliderWidth={width}
        onSnapToItem={setDotIndex}
        activeSlideAlignment="center"
        slideStyle={Styles.cardContainer}
        containerCustomStyle={Styles.container}
      />
      <Pagination
        inactiveDotScale={1}
        inactiveDotOpacity={0.2}
        dotsLength={data.length}
        activeDotIndex={indexDot}
        dotColor="#ffffff"
        dotStyle={Styles.paginationDot}
        containerStyle={Styles.paginationContainer}
        dotContainerStyle={{ marginHorizontal: 0 }}
      />
    </SafeAreaView>
  );
}
export default CarouselOnBoarding;
