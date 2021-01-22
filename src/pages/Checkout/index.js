import React, { useEffect, useState } from 'react';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-navigation';
import { ActivityIndicator, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ShoppingService from '@modules/api/api-shopping';
import DeviceStorage from '@modules/services/device-storage';

import { BLACK } from '@assets/style/colors';
import ArrowVIcon from '@assets/svg/arrowv';
import config from '@/config';
import styles from './style';

const Checkout = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState({});
  const [redirect, setRedirect] = useState('');

  async function loadCheckout() {
    ShoppingService.basketCheckout().then((response) => {
      if (response.success) {
        setRedirect(response.url);
        setSource({
          uri: response.url,
          method: 'GET'
        });
      } else {
        navigation.goBack();
      }
    });
  }

  function stateChange(navState) {
    const { url, loading: loadingPage } = navState;
    const { checkout: checkoutConfig } = config;

    if (!loadingPage && url !== redirect && url !== 'about:blank') {
      const filter = checkoutConfig.whitelist.filter(item => item.indexOf(url) === -1);
      if (filter.length === 0) {
        ShoppingService.getBasket().then(async (response) => {
          if (response && response.basket) {
            await DeviceStorage.setItem('@BelshopApp:cart', response.basket);
            if (response.basket.items.length > 0) navigation.goBack();
            else navigation.navigate('Home');
          }
        });
      } else {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    loadCheckout();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[
        styles.container,
        (!loading ? {
          opacity: 1
        } : {
          opacity: 0
        })
      ]}
      >
        <WebView
          onNavigationStateChange={stateChange}
          source={source}
          textZoom={100}
          style={[
            styles.container
          ]}
        />
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.btnImageIcon}>
              <ArrowVIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <View style={styles.loader}><ActivityIndicator size="large" color={BLACK} /></View>}
    </SafeAreaView>
  );
};

export default Checkout;
