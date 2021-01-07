import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import Title from "@components/atoms/Title";
import ButtonSeeAll from "@components/atoms/ButtonSeeAll";

// Styles
import Styles from "./styles";

const { width } = Dimensions.get("window");

const Card = ({ item, navigation, pageName }) => {
  const { images } = item;
  return (
    <View style={Styles.cardContainer}>
      {images.map((itemImage, index) => {
        const key = index;
        return (
          <TouchableOpacity
            key={key}
            onPress={() =>
              pageName &&
              navigation.navigate(pageName, { filter: itemImage.linkSub })
            }
            activeOpacity={1}
          >
            <View style={Styles.containerCardImageTitle}>
              <View style={Styles.imageCard}>
                <Image
                  style={{ width: 120, height: 104, flex: 1 }}
                  source={itemImage.image}
                  resizeMode="cover"
                />
              </View>
              {itemImage.sectionTitle.length > 0 && (
                <View style={Styles.titleCard}>
                  <Text>{itemImage.sectionTitle}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const CarouselBranding = ({
  showFooter,
  styleTitle,
  title,
  data,
  pageName,
  navigation,
}) => {
  const [indexDot, setDotIndex] = useState(0);

  return (
    <>
      <Title
        title={title}
        styleFont={styleTitle}
        style={{ paddingHorizontal: 16, marginLeft: 16 }}
      />
      <Carousel
        data={data}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={({ item }) => (
          <Card item={item} pageName={pageName} navigation={navigation} />
        )}
        sliderWidth={width}
        itemWidth={272}
        onSnapToItem={setDotIndex}
        activeSlideAlignment="start"
        containerCustomStyle={Styles.container}
      />
      {showFooter && (
        <>
          <Pagination
            inactiveDotScale={1}
            inactiveDotOpacity={0.2}
            dotColor="#0D0D0D"
            activeDotIndex={indexDot}
            dotStyle={Styles.paginationDot}
            dotsLength={data.length}
            containerStyle={Styles.paginationContainer}
            dotContainerStyle={{ marginHorizontal: 0 }}
          />
          <View style={Styles.ButtonSeeAll}>
            <ButtonSeeAll theme="light" />
          </View>
        </>
      )}
    </>
  );
};
CarouselBranding.propTypes = {
  pageName: PropTypes.string,
  showFooter: PropTypes.bool.isRequired,
  styleTitle: PropTypes.objectOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

CarouselBranding.defaultProps = {
  styleTitle: {},
  pageName: null,
};

export default CarouselBranding;
