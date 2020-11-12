import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

/* Components */
import Title from '../../components/atoms/Title';
import Section from '../../components/atoms/Section';
import LinkHelp from '../../components/atoms/LinkHelp';
import ListCard from '../../components/molecules/ListCard';
import IntroCard from '../../components/molecules/IntroCard';
import FilterButton from '../../components/molecules/FilterButton';
import ImageIntroCard from '../../components/molecules/ImageIntroCard';
import CarouselBranding from '../../components/organisms/CarouselBranding';

/* Icons */
import BagIcon from '../../assets/svg/bag';
import FavoriteIcon from '../../assets/svg/favorite';

/* Images */
import BelImage from '../../assets/images/bel.png';
import KissImage from '../../assets/images/kiss.png';

/* Styles */
import Styles from './styles';

function Home({ navigation }) {
  return (
    <>
      <ScrollView alwaysBounceVertical>
        {/* Promo */}
        <Section style={{ paddingTop: 64, ...Styles.section }}>
          <Title title={`Promos \nda Semana`} style={{ marginBottom: 64 }}>
            <TouchableOpacity onPress={() => {}}>
              <FavoriteIcon name="Favorite" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={Styles.bagIcon}>
              <BagIcon name="Bag" size={24} />
            </TouchableOpacity>
          </Title>
          <ListCard navigation={navigation} />
        </Section>
        {/* End Promo */}

        {/* Marcas */}
        <Section style={{ paddingTop: 16 }}>
          <Title
            title="Marcas"
            style={{ paddingHorizontal: 16, marginLeft: 16 }}
          />
          <CarouselBranding />
        </Section>
        {/* End Marcas */}

        {/* Realease */}
        <Section style={[Styles.belSection, Styles.section]}>
          <Title
            title={`Queri\ndinhos`}
            style={Styles.belTitle}
            styleFont={{ fontSize: 46 }}
          />
          <View style={Styles.belContainer}>
            <Image source={BelImage} style={Styles.belImage} />
            <Image source={KissImage} style={Styles.kissImage} />
          </View>
          <IntroCard />
          <ListCard navigation={navigation} />
        </Section>
        {/* End Realease */}

        {/* Novidades */}
        <Section style={{ paddingTop: 48, ...Styles.section }} theme="dark">
          <Title title="Novidades" theme="dark" />
          <ImageIntroCard />
          <ListCard theme="dark" navigation={navigation} />
        </Section>
        {/* End Novidades */}

        {/* Search about doubt */}
        <Section style={{ paddingTop: 80 }}>
          <Title title="O que você procura?" />
          <FilterButton />
          <LinkHelp />
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
