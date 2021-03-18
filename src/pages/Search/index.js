import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';

/** Icons */
import CloseIcon from '@assets/svg/close';
import { changeStatusBar } from '@modules/utils';
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
import { BLACK } from '@assets/style/colors';
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
      searchNotFound: false,
    };

    props.navigation.addListener('focus', () =>
      changeStatusBar('dark-content', BLACK)
    );
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
      searchNotFound: false,
    });
  };

  render() {
    const { navigation } = this.props;
    const {
      links,
      title,
      search,
      bullets,
      products,
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
              onChangeText={this.handlerSearch}
            />
            <CloseIcon color="#ffffff" onPress={this.handlerClear} />
          </View>

          <ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            contentContainerStyle={Styles.scroll}
          >
            {search.length > 0 &&
              products.length > 0 &&
              products.map((item, index) => {
                const key = index;
                return (
                  <CardMenusca key={key} item={item} navigation={navigation} />
                );
              })}
            {search.length > 0 && searchNotFound && (
              <Text style={Styles.notFoundText}>Produto não encontrado!</Text>
            )}
            {!search.length && (
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
