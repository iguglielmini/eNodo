import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Api from '@modules/api/api-home';
import LinkHelp from '@components/atoms/LinkHelp';
import DefaultStyles from '@assets/style/default';
import config from '@/config';

import Styles from './styles';

export default function Profile({ data, navigation }) {
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const { data: d } = await Api.getHome();
    if (d) setHomeData(d);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderLinks = () => {
    if (homeData.length === 0) return <View />;
    let wid = <View />;

    homeData.forEach((section) => {
      const {
        widgets
      } = section;

      widgets.forEach((widget) => {
        const {
          items, template
        } = widget;

        if (template === 'links') {
          const links = [{
            uri: `${config.urls.api}/profile/orders`,
            title: 'Meus Pedidos',
            auth: true,
          }, {
            uri: `${config.urls.api}/profile/wishlist/edit`,
            title: 'Favoritos',
            auth: true,
          }];

          wid = <LinkHelp data={[...links, ...items]} />;
        }
      });
    });

    return wid;
  };

  return (
    <SafeAreaView style={DefaultStyles.viewGrey}>
      {loading && (
        <View style={DefaultStyles.loading}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text style={Styles.headerName}>{`Olá ${data.name}`}</Text>
          <View>
            <TouchableOpacity style={Styles.headerAccountClick} onPress={() => navigation.navigate('Account')}>
              <Text style={Styles.headerAccount}>Sua conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {renderLinks()}
    </SafeAreaView>
  );
}
