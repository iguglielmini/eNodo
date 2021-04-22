import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Dimensions, SafeAreaView
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Component
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import Card from './Card';

// Utils
// import { queryStringToJSON } from '@modules/utils';

/* Styles */
import Styles from './styles';

const { width } = Dimensions.get('window');

const CarouselFavorites = ({ data, navigation }) => {
  const [indexDot, setDotIndex] = useState(0);

  function handlerFavorite() {
    return navigation.navigate('Favorites');
  }

  return (
    <SafeAreaView style={Styles.contentFavorites}>
      <Text style={Styles.TitleFavorites}>Favoritos</Text>
      {/* Container Empty Favorites */}
      {!data.length && (
        <View style={Styles.containerFavoritesEmpty}>
          <Text style={Styles.subTitleFavorites}>
            Você ainda não adicionou nenhum produto aos favoritos.
          </Text>
          <View style={Styles.btnContent}>
            <ButtonSeeAll
              theme="light"
              title="Continue comprando"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      )}
      {/* Container Carousel Product Favorites */}
      {data.length > 0 && (
        <>
          <Carousel
            data={data}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            renderItem={({ index, item }) => (
              <Card
                key={index}
                item={item}
                navigation={navigation}
              />
            )}
            itemWidth={150}
            sliderWidth={width}
            onSnapToItem={setDotIndex}
            activeSlideAlignment="start"
            slideStyle={{ flex: 1 }}
            containerCustomStyle={Styles.container}
          />
          <View style={Styles.contentFooter}>
            <ButtonSeeAll theme="light" title="Ver todos" onPress={handlerFavorite} />
            <Pagination
              inactiveDotScale={1}
              inactiveDotOpacity={0.2}
              dotsLength={data.length}
              activeDotIndex={indexDot}
              dotColor={Styles.Themecolor}
              dotStyle={Styles.paginationDot}
              dotContainerStyle={{ marginHorizontal: 0 }}
            />


          </View>
        </>
      )}
    </SafeAreaView>
  );
};
CarouselFavorites.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CarouselFavorites;
