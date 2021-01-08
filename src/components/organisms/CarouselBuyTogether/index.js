import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
// Libs
import Swiper from "react-native-swiper";

// Styles
import styles from "./styles";

function CarouselBuyTogether({ data }) {
  if (!data.length) return null;

  return (
    <>
      <View style={styles.container}>
        <Swiper
          loop
          autoplay
          height={250}
          style={styles.wrapper}
          dot={<View style={styles.swipperDot} />}
          activeDot={<View style={styles.swipperActiveDot} />}
          paginationStyle={{
            bottom: -23,
          }}
        >
          {data.map((item, index) => {
            const key = index;
            return (
              <View style={styles.Card} key={key}>
                <View style={styles.cardProduct}>
                  <View style={styles.ImageCard}>
                    <Image
                      style={styles.ImageProduct}
                      source={item.image1.url}
                    />
                    <View style={styles.circleText}>
                      <Text style={styles.text}>+</Text>
                    </View>
                    <Image
                      style={styles.ImageProduct}
                      source={item.image2.url}
                    />
                  </View>
                  <View style={styles.ImageTextPrice}>
                    <Text style={styles.text}>Compre os dois:</Text>
                    <Text style={styles.priceText}>{item.price}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>
    </>
  );
}

CarouselBuyTogether.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

CarouselBuyTogether.defaultProps = {};
export default CarouselBuyTogether;
