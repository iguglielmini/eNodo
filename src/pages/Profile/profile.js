import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

// Components
import LinkHelp from '@components/atoms/LinkHelp';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import CarouselFavorites from '@components/organisms/CarouselFavorites';

// Redux, Storage, Utils e API
import Api from '@modules/api/api-home';
import ApiProfile from '@modules/api/api-profile';
// Styles
import DefaultStyles from '@assets/style/default';
import Styles from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeData: [],
      loading: true,
      favorites: [],
    };
  }

  componentDidMount() {
    this.getData();
    this.getFavorites();
  }

  getData = () => {
    Api.getHome()
      .then(({ data }) => {
        this.setState({ homeData: data });
      })
      .finally(() => this.setState({ loading: false }));
  };

  renderLinks = () => {
    const { homeData } = this.state;
    if (!homeData.length) return null;

    return homeData.map((section) => {
      const { widgets } = section;

      return widgets.map((widget, index) => {
        const key = index;
        const { items, template } = widget;

        if (template === 'links') {
          return <LinkHelp data={[...items]} key={key} />;
        }

        return null;
      });
    });
  };

  getFavorites = async () => {
    ApiProfile.getFavoritesDetails()
      .then(({ data }) => {
        const { items } = data;
        this.setState({ favorites: items });
      }).finally(() => this.setState({ loading: false }));
  };

  render() {
    const { loading, favorites } = this.state;
    const { navigation, user } = this.props;

    return (
      <SafeAreaView style={DefaultStyles.viewGrey}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading && (
            <View style={DefaultStyles.loading}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          )}
          <View style={Styles.container}>
            <View style={Styles.header}>
              <Text style={Styles.headerName}>{`Olá ${user.name}`}</Text>
              <View>
                <TouchableOpacity
                  style={Styles.headerAccountClick}
                  onPress={() => navigation.navigate('Account')}
                >
                  <Text style={Styles.headerAccount}>Sua conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={Styles.contentOrder}>
            <Text style={Styles.TitleOrder}>Seus Pedidos</Text>
            <Text style={Styles.subTitleOrder}>
              Você ainda não realizou nenhum pedido na Belshop
            </Text>
            <View style={Styles.btnContent}>
              <ButtonSeeAll
                theme="light"
                title="Continue comprando"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
          <View style={Styles.contentFavorite}>
            <CarouselFavorites data={favorites} navigation={navigation} />
          </View>
          {this.renderLinks()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = store => ({
  user: store.user,
});

export default connect(
  mapStateToProps, null
)(Profile);
