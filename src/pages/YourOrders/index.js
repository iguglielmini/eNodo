import React, { Component } from 'react';
import { BGGREY, BLACK } from '@assets/style/colors';
import ArrowV from '@assets/svg/arrowv';
import { changeStatusBar } from '@modules/utils';
import Title from '@components/atoms/Title';
import { SafeAreaView } from 'react-navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import Order from '@components/atoms/Order';
import Styles from './styles';

class YourOrders extends Component {
  constructor(props) {
    super(props);
    changeStatusBar('dark-content');
    const routeParams = props.route.params;

    this.state = {
      orders: routeParams.orders,
      navigation: routeParams.navigation,
    };
  }

  componentDidMount() {
    changeStatusBar('light-content', BGGREY);
  }

  render() {
    const { navigation, orders } = this.state;

    return (
      <SafeAreaView
        showsVerticalScrollIndicator={false}
        style={Styles.container}
      >
        <TouchableOpacity
          style={{ paddingVertical: 12 }}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <ArrowV size={12} color={BLACK} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.content}>
            <Title
              title="Meus pedidos"
              style={{ paddingHorizontal: 0, marginBottom: 36 }}
            />
            {orders
              && orders.map(order => (
                <Order
                  key={order.orderId}
                  navigation={navigation}
                  data={order}
                />
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default YourOrders;
