import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

/* Components */
import Title from '../../components/Title';
import Section from '../../components/Section';
import ListCard from '../../components/ListCard';
import Accordion from '../../components/Accordion';
/* Icons */
import BagIcon from '../../assets/svg/bag';
import FavoriteIcon from '../../assets/svg/favorite';

const Styles = StyleSheet.create({
  bagIcon: {
    marginTop: -3,
    marginLeft: 36,
  },
});

function Home() {
  return (
    <>
      <ScrollView alwaysBounceVertical>
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
        {/* Branding */}
        <Section style={{ paddingTop: 16 }}>
          <Title title="Marcas" />
        </Section>
        {/* Realease */}
        <Section style={{ paddingTop: 48 }}>
          <Title title="Queridinhos" />
          <ListCard />
        </Section>
        <Section style={{ paddingTop: 48 }} theme="dark">
          <Title title="Novidades" theme="dark" />
          <ListCard theme="dark" />
        </Section>
        {/* Search about doubt */}
        <Section style={{ paddingTop: 80 }}>
          <Title title="O que você procura?" />
          <Accordion />
        </Section>
      </ScrollView>
    </>
  );
}

export default Home;
