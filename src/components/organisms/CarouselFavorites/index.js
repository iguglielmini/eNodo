import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Component
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
// Utils
// import { queryStringToJSON } from '@modules/utils';
/* Styles */
import Styles from './styles';

const { width } = Dimensions.get('window');

// Card Carousel
const Card = ({ item, onPress }) => {
  console.log('card item', item);
  const { image } = item;
  return (
    <TouchableOpacity
      style={Styles.cardContainer}
      onPress={() => {}}
    >
      <View style={Styles.imageCard}>
        {/* <Image
            resizeMode="cover"
            source={{ uri: image.url, ...image }}
          /> */}
      </View>
    </TouchableOpacity>
  );
};
const CarouselFavorites = ({ data, onPress, navigation }) => {
  const [indexDot, setDotIndex] = useState(0);

  if (!data || !data.length) return null;
  return (
    <SafeAreaView>
      <View style={Styles.contentFavorites}>
        <Text style={Styles.TitleFavorites}>Favoritos</Text>
        {/* Container Empty Favorites */}
        {/* <View style={Styles.containerFavoritesEmpty}>
            <Text style={Styles.subTitleFavorites}>
              Você ainda adicionou nenhum produto aos favoritos
            </Text>
            <View style={Styles.btnContent}>
              <ButtonSeeAll
                theme="light"
                title="Continue comprando"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View> */}
        {/* Container Carousel Product Favorites */}
        <Carousel
          data={data}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          renderItem={({ index, item }) => (
            <Card
              key={index}
              onPress={onPress}
              item={item}
              navigation={navigation}
            />
          )}
          itemWidth={100}
          sliderWidth={width}
          onSnapToItem={setDotIndex}
          activeSlideAlignment="start"
          containerCustomStyle={Styles.container}
          slideStyle={{ flex: 1 }}
        />
        <Pagination
          inactiveDotScale={1}
          inactiveDotOpacity={0.2}
          activeDotIndex={indexDot}
          dotsLength={data.length}
          dotColor={Styles.Themecolor}
          dotStyle={Styles.paginationDot}
          containerStyle={Styles.paginationContainer}
          dotContainerStyle={{ marginHorizontal: 0 }}
        />
        <View style={Styles.buttonSeeAll}>
          <ButtonSeeAll theme="light" title="Ver todos" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};
CarouselFavorites.propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

CarouselFavorites.defaultProps = {
  onPress: () => {},
};

export default CarouselFavorites;
