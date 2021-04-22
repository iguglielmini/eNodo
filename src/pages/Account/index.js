import React, { useEffect, useState } from 'react';
import { changeStatusBar } from '@modules/utils';
import { SafeAreaView } from 'react-navigation';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import ApiAuth from '@modules/api/api-auth';

import LinkHelp from '@components/atoms/LinkHelp';
import { useToast } from '@components/molecules/Toast';

import ArrowVIcon from '@assets/svg/arrowv';
import DefaultStyles from '@assets/style/default';
import config from '@/config';

import Styles from './styles';

export default function Profile({ navigation }) {
  const { urls } = config;
  const [loding, setLogin] = useState(false);
  const { open: openToast } = useToast();
  const logout = async () => {
    setLogin(true);

    try {
      await ApiAuth.logout();
      await ApiAuth.clearUser(false, true);
      setLogin(false);

      navigation.navigate('Profile');

      openToast({
        title: 'Sua Conta',
        message: 'Você foi deslogado com sucesso!',
        type: 'success',
      });
    } catch (error) {
      openToast({
        title: 'Sua Conta',
        message: 'Erro ao deslogar sua conta, por favor tente novamente.',
        type: 'error',
      });

      setLogin(false);
    }
  };

  const links = [
    {
      auth: true,
      isInternal: true,
      title: 'Dados cadastrais',
      url: `${urls.api}/profile/edit`,
    },
    {
      auth: true,
      isInternal: true,
      title: 'Endereços',
      url: `${urls.api}/profile/address/edit`,
    },
    {
      auth: true,
      isInternal: true,
      title: 'Alterar senha',
      url: `${urls.api}/profile/password/edit`,
    },
    {
      callback: logout,
      title: 'Sair'
    }
  ];

  useEffect(() => {
    changeStatusBar('dark-content');
  }, []);

  return (
    <SafeAreaView style={DefaultStyles.viewGrey}>
      <View style={Styles.containerHeader}>
        <TouchableOpacity style={Styles.btnBack} onPress={() => { navigation.goBack(); }}>
          <ArrowVIcon color="#000" />
        </TouchableOpacity>
      </View>
      <View style={Styles.container}>
        <Text style={Styles.title}>Sua conta</Text>
      </View>
      <LinkHelp data={links} />
      {loding && (
        <View style={DefaultStyles.loading}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </SafeAreaView>
  );
}
