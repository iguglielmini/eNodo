import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  View, Text, Image, Dimensions, TouchableOpacity
} from 'react-native';

import Title from '@components/atoms/Title';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';

// Styles
import Styles from './styles';

const { width } = Dimensions.get('window');

const Card = ({
  data, showTitle, navigation, pageName
}) => (
  <View style={Styles.cardContainer}>
    {data.map((item, index) => {
      const key = index;
      const { title, image, link } = item;
      return (
        <TouchableOpacity
          key={key}
          onPress={() => pageName && navigation.navigate(pageName, { filter: link })
          }
          activeOpacity={1}
        >
          <View style={Styles.containerCardImageTitle}>
            <View style={Styles.imageCard}>
              <Image
                resizeMode="cover"
                style={{ width: 120, height: 104, flex: 1 }}
                source={{ uri: image, width: 120, height: 104 }}
              />
            </View>
            {showTitle && (
              <View style={Styles.titleCard}>
                <Text>{title}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
);

const CarouselBranding = ({
  data,
  title,
  theme,
  pageName,
  showTitle,
  styleTitle,
  showFooter,
  navigation,
}) => {
  const [itens, setItens] = useState([]);
  const [sections, setSections] = useState([]);
  const [indexDot, setDotIndex] = useState(0);

  useEffect(() => {
    if (!data.length) return;

    const tempItens = [];
    const tempSections = [];
    const count = Math.ceil(data.length / 4);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= count - 1; i++) {
      tempSections.push(i);
    }

    for (let i = 0; i < data.length; i += 4) {
      tempItens.push(data.slice(i, i + 4));
    }

    setSections(tempSections);
    setItens(tempItens);
  }, []);

  return (
    <>
      <Title
        title={title}
        styleFont={styleTitle}
        style={{ paddingHorizontal: 16, marginLeft: 16 }}
      />
      <Carousel
        data={sections}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={({ index }) => (
          <Card
            data={itens[index]}
            pageName={pageName}
            showTitle={showTitle}
            navigation={navigation}
          />
        )}
        itemWidth={272}
        sliderWidth={width}
        onSnapToItem={setDotIndex}
        activeSlideAlignment="start"
        containerCustomStyle={Styles.container}
      />
      {showFooter && (
        <>
          <Pagination
            inactiveDotScale={1}
            inactiveDotOpacity={0.2}
            activeDotIndex={indexDot}
            dotsLength={sections.length}
            dotColor={Styles[theme].color}
            dotStyle={Styles.paginationDot}
            containerStyle={Styles.paginationContainer}
            dotContainerStyle={{ marginHorizontal: 0 }}
          />
          <View style={Styles.buttonSeeAll}>
            <ButtonSeeAll theme={theme} />
          </View>
        </>
      )}
    </>
  );
};
CarouselBranding.propTypes = {
  theme: PropTypes.string,
  showTitle: PropTypes.bool,
  pageName: PropTypes.string,
  showFooter: PropTypes.bool,
  styleTitle: PropTypes.objectOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

CarouselBranding.defaultProps = {
  theme: 'light',
  styleTitle: {},
  pageName: null,
  showTitle: true,
  showFooter: false,
};

export default CarouselBranding;
