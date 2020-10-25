import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

/* Components */
import Title from '../../components/Title';
import Section from '../../components/Section';
import ListCard from '../../components/ListCard';
import Accordion from '../../components/Accordion';
/* Icons */
import BagIcon from '../../assets/svg/bag';
import FavoriteIcon from '../../assets/svg/favorite';

/* Images */
import BelImage from '../../assets/images/bel.png';
import KissImage from '../../assets/images/kiss.png';

const Styles = StyleSheet.create({
  bagIcon: {
    marginTop: -3,
    marginLeft: 36,
  },
  belContainer: {
    marginBottom: 55,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  belImage: {
    marginLeft: 32,
  },
  kissImage: {
    width: 115,
    marginTop: -35,
    marginLeft: 30,
  },
});

function Home() {
  return (
    <>
      <ScrollView alwaysBounceVertical>
        {/* Promo */}
        <Section style={{ paddingTop: 64 }}>
          <Title title={`Promos \nda Semana`} style={{ marginBottom: 64 }}>
            <TouchableOpacity onPress={() => {}}>
              <FavoriteIcon name="Favorite" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={Styles.bagIcon}>
              <BagIcon name="Bag" size={24} />
            </TouchableOpacity>
          </Title>
          <ListCard />
        </Section>
        {/* End Promo */}

        {/* Marcas */}
        <Section style={{ paddingTop: 16 }}>
          <Title title="Marcas" />
        </Section>
        {/* End Marcas */}

        {/* Realease */}
        <Section style={{ paddingTop: 48 }}>
          <Title title={`Queri\ndinhos`} styleFont={{ fontSize: 46 }} />
          <View style={Styles.belContainer}>
            <Image source={BelImage} style={Styles.belImage} />
            <Image source={KissImage} style={Styles.kissImage} />
          </View>
          <ListCard />
        </Section>
        {/* End Realease */}

        {/* Novidades */}
        <Section style={{ paddingTop: 48 }} theme="dark">
          <Title title="Novidades" theme="dark" />
          <ListCard theme="dark" />
        </Section>
        {/* End Novidades */}

        {/* Search about doubt */}
        <Section style={{ paddingTop: 80 }}>
          <Title title="O que você procura?" />
          <Accordion />
        </Section>
        {/* End search about doubt */}
      </ScrollView>
    </>
  );
}

export default Home;
