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
import OrderList from '@components/organisms/OrderList';
import CarouselFavorites from '@components/organisms/CarouselFavorites';

// Redux, Storage, Utils e API
import Api from '@modules/api/api-home';
import ApiProfile from '@modules/api/api-profile';
import ApiShopping from '@modules/api/api-shopping';
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
      orders: [],
    };
  }

  componentDidMount() {
    Promise.all([
      Api.getHome(),
      ApiShopping.getUserOrders(),
      this.getFavorites(),
    ])
      .then((data) => {
        const [
          { data: homeData },
          {
            data: { orders },
          },
          {
            data: { items: favorites },
          },
        ] = data;
        this.setState({
          homeData,
          orders,
          favorites,
        });
      })
      .finally(() => this.setState({ loading: false }));
  }

  getFavorites = () => ApiProfile.getFavoritesDetails();

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps() {
    this.getFavorites().then(({ data }) => {
      const { items } = data;
      this.setState({ favorites: items });
    });
  }

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

  render() {
    const { loading, favorites, orders } = this.state;
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
            <OrderList
              orders={orders}
              navigation={navigation}
              loading={loading}
            />
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
  favorites: store.user.favorites,
});

export default connect(
  mapStateToProps,
  null
)(Profile);
