import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

/* Components */
import Title from '../../components/Title';
import Section from '../../components/Section';

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
      <ScrollView horizontal={false} alwaysBounceVertical>
        <Section style={{ paddingTop: 64 }}>
          <Title title={`Promos \nda Semana`}>
            <TouchableOpacity onPress={() => {}}>
              <FavoriteIcon name="Favorite" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={Styles.bagIcon}>
              <BagIcon name="Bag" size={24} />
            </TouchableOpacity>
          </Title>
        </Section>
        <Section style={{ paddingTop: 16 }}>
          <Title title="Marcas" />
        </Section>
        <Section style={{ paddingTop: 48 }} theme="dark">
          <Title title="Novidades" theme="dark" />
        </Section>
        <Section style={{ paddingTop: 80 }}>
          <Title title="O que você procura?" />
        </Section>
      </ScrollView>
    </>
  );
}

export default Home;
