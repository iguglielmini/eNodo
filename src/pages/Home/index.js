import React from 'react';
import {
  View, Image, ScrollView, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import ListCard from '@components/molecules/ListCard';
import IntroCard from '@components/molecules/IntroCard';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import FilterButton from '@components/molecules/FilterButton';
import ImageIntroCard from '@components/molecules/ImageIntroCard';
import CarouselBranding from '@components/organisms/CarouselBranding';

/* Icons */
import BagIcon from '@assets/svg/bag';
import FavoriteIcon from '@assets/svg/favorite';

/* Images */
import imageBel from '@assets/images/bel.png';
import imageKiss from '@assets/images/kiss.png';

// Mock
import ProductInfo from '@mock/ProductInfo';
import LinkHelpMock from '@mock/LinkHelpMock';
import CardlistMock from '@mock/CardListMock';
import BrandingMock from '@mock/CarouselBrandingMock';
import FilterButtonInfo from '@mock/FilterButtonMock';

/* Styles */
import Styles from './styles';

function Home({ navigation }) {
  function handleShowCategory() {
    navigation.navigate('Category');
  }
  function handleShowCart() {
    navigation.navigate('Cart');
  }
  return (
    <>
      <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
        {/* Promo */}
        <Section style={{ paddingTop: 64, ...Styles.section }}>
          <Title title={'Promos \nda Semana'}>
            <TouchableOpacity onPress={() => {}}>
              <FavoriteIcon name="Favorite" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleShowCart()} style={Styles.bagIcon}>
              <BagIcon name="Bag" size={24} />
            </TouchableOpacity>
          </Title>
          <ListCard data={CardlistMock} navigation={navigation} />
        </Section>
        {/* End Promo */}

        {/* Marcas */}
        <Section style={{ paddingTop: 16 }}>
          <CarouselBranding
            showFooter
            title="Marcas"
            data={BrandingMock}
            navigation={navigation}
          />
        </Section>
        {/* End Marcas */}

        {/* Realease */}
        <Section style={[Styles.belSection, Styles.section]}>
          <View style={Styles.containerBel}>
            <View style={Styles.containerTitleBel}>
              <Title
                size="xlarge"
                title={'Queri\ndinhos'}
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  marginLeft: 0,
                  paddingLeft: 0,
                }}
              />
              <Image source={imageBel} style={Styles.belImage} />
            </View>
            <Image source={imageKiss} style={Styles.kissImage} />
          </View>
          <View style={{ paddingBottom: 44 }}>
            <IntroCard data={ProductInfo} />
          </View>
          <ListCard data={CardlistMock} navigation={navigation} />
          <ButtonSeeAll theme="light" />
        </Section>
        {/* End Realease */}

        {/* Novidades */}
        <Section style={{ paddingTop: 48 }} theme="dark">
          <Title
            title="Novidades"
            theme="dark"
            style={Styles.novidadeBellTitle}
          />
          <ImageIntroCard />
          <View style={Styles.section}>
            <ListCard
              data={CardlistMock}
              theme="dark"
              navigation={navigation}
            />
          </View>
          <ButtonSeeAll theme="dark" />
        </Section>
        {/* End Novidades */}

        {/* Search about doubt */}
        <Section style={{ paddingTop: 80 }}>
          <Title title="O que você procura?" />
          <FilterButton
            data={FilterButtonInfo}
            onClick={() => handleShowCategory()}
          />
          <LinkHelp
            data={LinkHelpMock.LinkHome}
          />
        </Section>
        {/* End search about doubt */}
      </ScrollView>
    </>
  );
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
