import React, { Component } from 'react';
import {
  View, ScrollView, TextInput
} from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import SearchIcon from '@assets/svg/searchProduct';
import CategoryList from '../../components/molecules/CategoryList';
/** Icons */
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
        <View style={Styles.containerSearch}>
          {/* header */}
          <View style={Styles.contentHeader}>
            <SearchIcon color="#ffffff" />
            <TextInput
              style={Styles.inputSearch}
              placeholder="Buscar"
              placeholderTextColor="#F3F3F3"
            />
          </View>
          {/* Content Search */}
          <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
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
        </View>
      </>
    );
  }
}

export default Search;
