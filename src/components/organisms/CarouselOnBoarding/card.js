import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, Platform
} from 'react-native';
import OneSignal from 'react-native-onesignal';
import { StackActions } from '@react-navigation/native';

// Utils
import DeviceStorage from '@modules/services/device-storage';

/* Styles */
import { WHITE } from '@assets/style/colors';
import Styles from './styles';

function CardOnboarding({ item, navigation }) {
  const [configNotify, setConfigNotify] = useState({
    alert: false,
    badge: false,
    sound: false,
  });
  const { image, content, actionButton } = item;

  function dispatchScreen() {
    const pushAction = StackActions.replace('Home');
    navigation.dispatch(pushAction);
  }

  async function configNotification(options) {
    if (options) setConfigNotify(options);
    await OneSignal.requestPermissions(configNotify);
  }

  async function goHomeScreen() {
    configNotification({ alert: true, badge: true, sound: true });
    await DeviceStorage.setItem('@BelshopApp:finishedOnboarding', true);
    await DeviceStorage.setItem('@BelshopApp:Notifications', { allOn: true });
    dispatchScreen();
  }

  async function noNotify() {
    configNotification();
    await DeviceStorage.setItem('@BelshopApp:finishedOnboarding', true);
    dispatchScreen();
  }

  return (
    <View style={Styles.cardContainer}>
      <Image resizeMode="contain" style={Styles.cardImage} source={image} />
      <View style={Styles.cardTitleArea}>
        <Text style={Styles.TitleOnboarding}>{content}</Text>
        {actionButton && (
          <View style={Styles.containerButton}>
            <TouchableOpacity
              style={Styles.buttonBoarding}
              onPress={goHomeScreen}
            >
              <Text>Ativar Notificação</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={noNotify}>
              <Text styles={{ color: WHITE }}>Agora não!</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

export default CardOnboarding;
