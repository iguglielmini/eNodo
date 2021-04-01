/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/** Icons */
import CloseIcon from '@assets/svg/close';
import { changeStatusBar } from '@modules/utils';
import SearchIcon from '@assets/svg/searchProduct';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';

import ApiHome from '@modules/api/api-home';
import { favoritesUser } from '@redux/actions';
import ApiCatalog from '@modules/api/api-catalog';
import ApiProfile from '@modules/api/api-profile';
import DeviceStorage from '@modules/services/device-storage';

/* Styles */
import { BLACK } from '@assets/style/colors';
import CategoryList from '../../components/molecules/CategoryList';
import CardMenusca from '../../components/molecules/CardMenusca';
import Styles from './styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      terms: [],
      title: '',
      search: '',
      bullets: [],
      products: [],
      theme: 'dark',
      searchNotFound: false,
    };

    props.navigation.addListener(
      'focus',
      () => changeStatusBar('dark-content', BLACK)
    );
  }

  componentDidMount() {
    this.getData();
    this.getFavorites();
  }

  getFavorites = async () => {
    await ApiProfile.getFavorites().then(({ data }) => {
      DeviceStorage.setItem('@BelshopApp:favorites', data.items);
      this.props.favoritesUser(data.items);
    });
  };

  getData = async () => {
    const { data } = await ApiHome.getHome();

    if (!data || !data.length) return;

    data.forEach((section) => {
      const { title, theme, widgets } = section;

      widgets.forEach((widget) => {
        const { items, template } = widget;

        if (template === 'links') {
          this.setState({ links: items, theme });
        }
        if (template === 'bullets') {
          this.setState({ bullets: items, title, theme });
        }
      });
    });
  };

  handlerSearch = async (search) => {
    this.setState({ search });

    const {
      data: { products, terms },
    } = await ApiCatalog.getCatalogSearchPreview(search);

    this.setState({ products, terms, searchNotFound: !products.length });
  };

  handlerTermSearch = async (search) => {
    const { navigation } = this.props;
    const { data } = await ApiCatalog.getCatalogSearch({ terms: search });

    navigation.navigate('FilterResult', {
      searchTerms: data,
      isFavorite: false,
      hideOptionsButtons: true,
      title: `${data.products.length} resultados`,
    });
  }

  handlerClear = () => {
    this.setState({
      search: '',
      terms: [],
      products: [],
      searchNotFound: false,
    });
  };

  render() {
    const { navigation } = this.props;
    const {
      links,
      title,
      terms,
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
              placeholder="Buscar"
              style={Styles.inputSearch}
              placeholderTextColor="#F3F3F3"
              onChangeText={this.handlerSearch}
            />
            {search.length > 0 && (
              <CloseIcon color="#ffffff" onPress={this.handlerClear} />
            )}
          </View>

          <ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            contentContainerStyle={Styles.scroll}
          >
            {terms.length > 0 && (
              <View style={Styles.ContentItemTerms}>
                {terms.map((item, index) => {
                  const key = index;
                  return (
                    <TouchableOpacity
                      key={key}
                      style={Styles.itemTerms}
                      onPress={() => this.handlerTermSearch(item)}
                    >
                      <Text style={Styles.TitleitemTerms}>{item}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
            {search.length > 0
              && products.length > 0
              && products.map((item, index) => {
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

const mapDispatchToProps = dispatch => bindActionCreators({ favoritesUser }, dispatch);

export default connect(null, mapDispatchToProps)(Search);
