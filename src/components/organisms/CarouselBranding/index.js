import React, { useState } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Styles
import Styles from './styles';
import mock from '../../../mock/CarouselBrandingMock';

const { width } = Dimensions.get('window');

const Card = ({ item }) => {
  const { images } = item;
  return (
    <View style={Styles.card}>
      {images.map((image, index) => {
        const key = index;
        return (
          <View key={key} style={Styles.imageCard}>
            <Image source={image} resizeMode="cover" />
          </View>
        );
      })}
    </View>
  );
};

const CarouselBranding = () => {
  const [indexDot, setDotIndex] = useState(0);

  return (
    <>
      <View style={Styles.container}>
        <Carousel
          data={mock}
          hasParallaxImages
          renderItem={Card}
          sliderWidth={width}
          sliderHeight={width}
          inactiveSlideScale={1}
          itemWidth={width - 68}
          inactiveSlideOpacity={1}
          slideStyle={Styles.slide}
          onSnapToItem={setDotIndex}
        />
        <Pagination
          inactiveDotScale={0.6}
          inactiveDotOpacity={0.4}
          activeDotIndex={indexDot}
          dotStyle={Styles.activeDot}
          dotsLength={mock.length - 1}
          containerStyle={Styles.pagination}
          inactiveDotStyle={Styles.inactiveDot}
          dotContainerStyle={Styles.dotContainer}
        />
      </View>
    </>
  );
};

export default CarouselBranding;
