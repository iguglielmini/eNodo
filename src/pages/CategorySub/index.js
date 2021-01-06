import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ScrollView, TouchableOpacity
} from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import ModalFilter from '@components/organisms/ModalFilter';
import HeaderCategory from '@components/atoms/HeaderCategory';

// Mock
import CardlistMock from '@mock/CardListMock';

/** Styles */
import Styles from './styles';
// import SelectFilter from '../../components/atoms/SelectFilter';

function CategorySub({ route, navigation }) {
  const { filter } = route.params;
  const [modalFilter, setModalFilter] = useState(false);

  return (
    <View style={Styles.Container}>
      {/* Header */}
      <HeaderCategory navigation={navigation} />
      {/* Section title category */}
      <View style={Styles.containerPage}>
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          {/* Section 4 Mais vendidos */}
          <Section style={{ paddingTop: 48 }}>
            {/* Intro page */}
            <View style={Styles.containerSubtitle}>
              <Title
                title={filter}
                style={Styles.AlignItems}
              />

              <TouchableOpacity onPress={() => setModalFilter(true)}>
                <View style={Styles.btnFilter}>
                  <Text>Filtrar</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* Modal */}
            <ModalFilter visible={modalFilter} setVisible={setModalFilter} />
            {/* filter selected */}
            {/* <ScrollView horizontal contentContainerStyle={Styles.containerSelectedOption}>
              <SelectFilter />
            </ScrollView> */}
            {/* Product Card */}
            <View style={Styles.ProductCard}>
              <ListCard data={CardlistMock} navigation={navigation} />
            </View>
          </Section>
        </ScrollView>
      </View>
    </View>
  );
}

CategorySub.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CategorySub;
