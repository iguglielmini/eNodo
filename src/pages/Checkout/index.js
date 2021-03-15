import React, { useEffect, useRef, useState } from 'react';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-navigation';
import { ActivityIndicator, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ShoppingService from '@modules/api/api-shopping';
import DeviceStorage from '@modules/services/device-storage';
import { useToast } from '@components/molecules/Toast';
import ApiAuth from '@modules/api/api-auth';

import { BLACK } from '@assets/style/colors';
import ArrowVIcon from '@assets/svg/arrowv';
import DefaultStyles from '@assets/style/default';
import config from '@/config';
import styles from './style';


const Checkout = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState(null);
  const [redirect, setRedirect] = useState('');
  const checkoutTimeoutRef = useRef(null);

  const { open: openToast } = useToast();

  async function loadCheckout() {
    try {
      const { data } = await ShoppingService.basketCheckout();

      if (!data.url) {
        navigation.goBack();
      }

      const token = await ApiAuth.getToken();

      setRedirect(data.url);
      setSource({
        uri: data.url,
        headers: {
          'x-api-key': config.apiKey,
          Authorization: `Bearer ${token}`
        },
      });

      clearTimeout(checkoutTimeoutRef.current);
      checkoutTimeoutRef.current = setTimeout(() => {
        openToast({
          title: 'Carrinho',
          message: 'Erro ao processar carrinho, por favor tente novamente!',
          type: 'error',
        });
        navigation.goBack();
      }, 10000);
    } catch (error) {
      if (error.statusCode === 401) {
        navigation.replace('Login', { to: 'Checkout', replace: true });
        return;
      }

      navigation.goBack();
    }
  }

  function stateChange(navState) {
    const { url, loading: loadingPage } = navState;
    const { checkout: checkoutConfig } = config;

    if (url !== redirect && url !== 'about:blank' && url.indexOf('/Basket/CheckoutRedirect') === -1) {
      clearTimeout(checkoutTimeoutRef.current);
      setLoading(false);
    }

    if (!loadingPage && url !== redirect && url !== 'about:blank') {
      const filter = checkoutConfig.whitelist.filter(item => item.indexOf(url) === -1);
      if (filter.length === 0) {
        ShoppingService.getBasket().then(async (response) => {
          const { data } = response;
          if (data && data.basket) {
            await DeviceStorage.setItem('@BelshopApp:cart', data.basket);
            if (data.basket.items.length > 0) navigation.goBack();
            else navigation.navigate('Home');
          }
        });
      }
    }
  }

  useEffect(() => {
    loadCheckout();

    return () => {
      clearTimeout(checkoutTimeoutRef.current);
    };
  }, []);

  return (
    <SafeAreaView style={DefaultStyles.viewWhite}>
      <View style={[
        styles.container,
        (!loading ? {
          opacity: 1
        } : {
          opacity: 0
        })
      ]}
      >
        {source && (
        <WebView
          onNavigationStateChange={stateChange}
          source={source}
          textZoom={100}
          style={[
            styles.container
          ]}
        />
        )}
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
