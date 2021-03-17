import React, { Component } from 'react';
import { View, ScrollView, TextInput, SafeAreaView, Text } from 'react-native';

/** Icons */
import CloseIcon from '@assets/svg/close';
import SearchIcon from '@assets/svg/searchProduct';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import CardMenusca from '../../components/molecules/CardMenusca';
import CategoryList from '../../components/molecules/CategoryList';

import ApiHome from '@modules/api/api-home';
import ApiCatalog from '@modules/api/api-catalog';

/* Styles */
import Styles from './styles';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      title: '',
      search: '',
      bullets: [],
      products: [],
      theme: 'dark',
      searchFocus: false,
      searchNotFound: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { data } = await ApiHome.getHome();

    if (!data || !data.length) return;

    data.forEach(section => {
      const { title, theme, widgets } = section;

      widgets.forEach(widget => {
        const { items, template } = widget;

        if (template === 'links') this.setState({ links: items, theme });
        if (template === 'bullets')
          this.setState({ bullets: items, title, theme });
      });
    });
  };

  toggleSearchFocused = () => {
    const { searchFocus } = this.state;
    this.setState({ searchFocus: !searchFocus, products: [] });
  };

  handlerSearch = async search => {
    this.setState({ search, searchFocus: true });

    const {
      data: { products },
    } = await ApiCatalog.getCatalogSearchPreview(search);

    if (!products.length) this.setState({ products, searchNotFound: true });
    else this.setState({ products, searchNotFound: false });
  };

  handlerClear = () => {
    this.setState({
      search: '',
      products: [],
      searchFocus: false,
      searchNotFound: false,
    });
    this.toggleSearchFocused();
  };

  render() {
    const { navigation } = this.props;
    const {
      links,
      title,
      search,
      bullets,
      products,
      searchFocus,
      searchNotFound,
    } = this.state;

    return (
      <>
        <SafeAreaView style={Styles.containerSearch}>
          {/* header */}
          <View style={Styles.contentHeader}>
            <SearchIcon color="#ffffff" />
            <TextInput
              value={search}
              placeholder="Busca"
              style={Styles.inputSearch}
              placeholderTextColor="#F3F3F3"
              onBlur={this.toggleSearchFocused}
              onFocus={this.toggleSearchFocused}
              onChangeText={this.handlerSearch}
            />
            <CloseIcon color="#ffffff" onPress={this.handlerClear} />
          </View>

          <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
            {searchFocus &&
              products.length > 0 &&
              products.map((item, index) => {
                const key = index;
                return <CardMenusca key={key} item={item} />;
              })}
            {searchFocus && searchNotFound && (
              <Text style={Styles.notFoundText}>Produto não encontrado!</Text>
            )}
            {!searchFocus && (
              <>
                <Section style={{ paddingTop: 64 }} theme="dark">
                  <Title
                    theme="dark"
                    title={title}
                    style={Styles.titleCatgoryFilter}
                  />
                  <CategoryList
                    theme="light"
                    data={bullets}
                    navigation={navigation}
                  />
                </Section>
                <Section style={{ paddingTop: 16 }} theme="dark">
                  <LinkHelp data={links} theme="light" />
                </Section>
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Search;
