import React from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-native-slick';
import { View, Image } from 'react-native';

// Styles
import Styles from './styles';

function CarouselProduct({ gallery }) {
  if (!gallery.length) return null;

  return (
    <>
      <Slick
        autoplay
        showsButtons={false}
        style={Styles.container}
        activeDotColor="#0d0d0d"
        paginationStyle={Styles.dot}
      >
        {gallery.map((image, index) => {
          const key = index;
          if (!image) return null;

          return (
            <View style={Styles.cardContainer} key={key}>
              <Image
                style={Styles.cardImage}
                source={{
                  ...image,
                  uri: image.url,
                }}
              />
            </View>
          );
        })}
      </Slick>
    </>
  );
}

CarouselProduct.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
};

CarouselProduct.defaultProps = {
  gallery: [],
};

export default CarouselProduct;
