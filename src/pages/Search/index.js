import React, { Component } from 'react';
import {
  View, ScrollView, TextInput, SafeAreaView
} from 'react-native';

/** Icons */
import SearchIcon from '@assets/svg/searchProduct';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import CardMenusca from '../../components/molecules/CardMenusca';
import CategoryList from '../../components/molecules/CategoryList';

/* Styles */
import Styles from './styles';
// Mock
import LinkHelpMock from '../../mock/LinkHelpMock';
import MockCategoryList from '../../mock/FilterButtonMock';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <SafeAreaView style={Styles.containerSearch}>
          {/* header */}
          <View style={Styles.contentHeader}>
            <SearchIcon color="#ffffff" />
            <TextInput
              style={Styles.inputSearch}
              placeholder="Busca"
              placeholderTextColor="#F3F3F3"
            />
          </View>
          {/* Result Search
          <View>
            <CardMenusca />
          </View> */}

          <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
            {/* Result Search */}
            {/* <CardMenusca /> */}
            {/* Content Search */}
            <Section style={{ paddingTop: 64 }} theme="dark">
              <Title
                title="O que você procura?"
                theme="dark"
                style={Styles.titleCatgoryFilter}
              />
              <CategoryList data={MockCategoryList} theme="light" />
            </Section>
            <Section style={{ paddingTop: 16 }} theme="dark">
              <LinkHelp data={LinkHelpMock} theme="light" />
            </Section>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Search;
