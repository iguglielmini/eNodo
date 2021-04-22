import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
// Component
import Order from '@components/atoms/Order';
import Title from '@components/atoms/Title';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
// Styles
import Styles from './styles';

function OrderList({ orders, navigation, loading }) {
  return (
    <SafeAreaView>
      <View style={Styles.container}>
        <Title title="Seus pedidos" style={{ paddingHorizontal: 0 }} />
        {!loading && (
          <>
            {orders.length ? (
              <View>
                {orders.slice(0, 3).map(order => (
                  <Order
                    key={order.orderId}
                    navigation={navigation}
                    data={order}
                  />
                ))}
                <ButtonSeeAll
                  title="Ver todos"
                  theme="title"
                  containerStyle={{
                    paddingHorizontal: 0,
                    paddingVertical: 32,
                  }}
                  onPress={() => navigation.navigate('YourOrders', { orders, navigation })
                  }
                />
              </View>
            ) : (
              <View>
                <Text style={Styles.subTitleOrder}>
                  Você ainda não realizou nenhum pedido na Belshop
                </Text>
                <ButtonSeeAll
                  title="Continue comprando"
                  theme="title"
                  containerStyle={{
                    paddingHorizontal: 0,
                    paddingVertical: 32,
                  }}
                  onPress={() => navigation.navigate('Home')}
                />
              </View>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

export default OrderList;
