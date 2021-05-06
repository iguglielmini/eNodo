import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import HeaderHome from '@components/molecules/HeaderHome';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';

// Styles
import FastImage from 'react-native-fast-image';
import Styles from './styles';

const { width } = Dimensions.get('window');

function HeroBanner({
  gallery = [], navigation, lengthCart, action
}) {
  if (!gallery.length) return null;

  const [dotColor, setDotColor] = useState(gallery[0]?.textColor);
  const [indexDot, setDotIndex] = useState(0);

  const handleActiveImgChange = (index) => {
    const color = gallery[index].textColor;
    setDotColor(color);
    setDotIndex(index);
  };

  return (
    <>
      <View style={Styles.bannerHeader}>
        <HeaderHome
          color={dotColor}
          lengthCart={lengthCart}
          navigation={navigation}
        />
        <Pagination
          inactiveDotScale={1}
          inactiveDotOpacity={0.2}
          inactiveDotColor={dotColor}
          activeDotIndex={indexDot}
          dotsLength={gallery.length}
          dotColor={dotColor}
          // dotStyle={Styles.paginationDot}
          containerStyle={{ ...Styles.pagination }}
          dotContainerStyle={{ marginHorizontal: 4 }}
        />
      </View>

      <Carousel
        loop
        autoplay
        data={gallery}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={({ item }) => {
          const { targetType, target } = item;
          const { height, url } = item.image;

          return (
            <View
              style={{
                width,
                height,
                flex: 1,
                flexDirection: 'column',
              }}
              key={url}
            >
              <View style={Styles.cardImageWrapper}>
                <FastImage
                  style={Styles.cardImage}
                  source={{ uri: url, priority: FastImage.priority.high }}
                >
                  {targetType !== 'none' && (
                    <View style={Styles.buttonContainer}>
                      <ButtonSeeAll
                        showArrow={false}
                        theme="light"
                        title="Veja mais"
                        onPress={() => action(targetType, target)}
                        style={Styles.buttonSeeMore}
                      />
                    </View>
                  )}
                </FastImage>
              </View>
            </View>
          );
        }}
        itemWidth={width}
        sliderWidth={width}
        onSnapToItem={handleActiveImgChange}
        activeSlideAlignment="start"
        containerCustomStyle={Styles.container}
        slideStyle={{ flex: 1 }}
      />
    </>
  );
}

HeroBanner.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.func,
};

HeroBanner.defaultProps = {
  gallery: [],
  action: () => { },
};

export default HeroBanner;
