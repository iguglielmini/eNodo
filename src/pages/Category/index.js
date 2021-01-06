import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ScrollView, TouchableOpacity
} from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import HeaderCategory from '@components/atoms/HeaderCategory';
import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import ModalFilter from '@components/organisms/ModalFilter';
import CarouselBranding from '@components/organisms/CarouselBranding';

// Mock
import CardlistMock from '@mock/CardListMock';
import BrandingMock from '@mock/CarouselBrandingMock';
import CategoryMock from '@mock/CategoryMock';

/** Styles */
import Styles from './styles';

function Category({ route, navigation }) {
  // const { id } = route.params;
  const [modalFilter, setModalFilter] = useState(false);

  return (
    <View style={Styles.Container}>
      {/* Header */}
      <HeaderCategory navigation={navigation} />
      {/* Section title category */}
      <View style={Styles.containerPage}>
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 48 }}>
            <Title title="Cabelos" style={{ paddingLeft: 32, marginBottom: 0, paddingBottom: 0 }} />
            <CarouselBranding
              styleTitle={Styles.subTitle}
              data={CategoryMock.filterCabelo}
              navigation={navigation}
              pageName="CategorySub"
            />
          </View>
          {/* Section 2 */}
          <Section style={Styles.section}>
            <CarouselBranding
              styleTitle={Styles.subTitle}
              title="Tipos de Cabelo"
              data={CategoryMock.filterType}
              navigation={navigation}
              pageName="CategorySub"
            />
          </Section>
          {/* Section 3 Branding */}
          <Section style={Styles.section}>
            <CarouselBranding
              styleTitle={Styles.subTitle}
              title="Marcas"
              data={BrandingMock}
              navigation={navigation}
              pageName="CategorySub"
            />
          </Section>
          {/* Section 4 Mais vendidos */}
          <Section style={Styles.section}>
            <View style={Styles.containerSubtitle}>
              <Title
                title="Mais vendidos"
                styleFont={Styles.subTitle}
                style={Styles.AlignItems}
              />

              <TouchableOpacity onPress={() => setModalFilter(true)}>
                <View style={Styles.btnFilter}>
                  <Text>Filtrar</Text>
                </View>
              </TouchableOpacity>
            </View>
            <ModalFilter visible={modalFilter} setVisible={setModalFilter} />
            <View style={Styles.ProductCard}>
              <ListCard data={CardlistMock} navigation={navigation} />
            </View>
          </Section>
        </ScrollView>
      </View>
    </View>
  );
}

Category.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Category;
