import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Slick from 'react-native-slick';
import HeaderHome from '@components/molecules/HeaderHome';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';

// Styles
import Styles from './styles';

const dotSize = 6;

function HeroBanner({
  gallery = [], navigation, lengthCart, action
}) {
  const [dotColor, setDotColor] = useState(gallery[0]?.textColor);

  if (!gallery.length) return null;

  const handleActiveImgChange = (index) => {
    const color = gallery[index].textColor;
    setDotColor(color);
  };

  return (
    <>
      <View style={Styles.bannerHeader}>
        <HeaderHome
          color={dotColor}
          lengthCart={lengthCart}
          navigation={navigation}
        />
      </View>
      <Slick
        autoplay
        autoplayTimeout={3}
        style={Styles.container}
        dotStyle={{
          backgroundColor: dotColor,
          opacity: 0.2,
          width: dotSize,
          height: dotSize,
        }}
        activeDotStyle={{ width: dotSize, height: dotSize }}
        activeDotColor={dotColor}
        paginationStyle={{ ...Styles.dot, ...Styles.bannerHeader }}
        onIndexChanged={index => handleActiveImgChange(index)}
      >
        {gallery.map((item, index) => {
          const key = index;
          const { targetType, target } = item;
          const { height, url } = item.image;

          return (
            <View
              style={{
                height,
                flex: 1,
                flexDirection: 'column',
              }}
              key={key}
            >
              <ImageBackground style={Styles.cardImage} source={{ uri: url }}>
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
              </ImageBackground>
            </View>
          );
        })}
      </Slick>
    </>
  );
}

HeroBanner.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.func,
};

HeroBanner.defaultProps = {
  gallery: [],
  action: () => {},
};

export default HeroBanner;
