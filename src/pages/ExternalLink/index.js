import React from 'react';
import WebView from 'react-native-webview';
import PropTypes from 'prop-types';

import { SafeAreaView } from 'react-navigation';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ApiAuth from '@modules/api/api-auth';
import ArrowVIcon from '@assets/svg/arrowv';
import DefaultStyles from '@assets/style/default';
import config from '@/config';
import styles from './styles';

const URL_LOGIN = `${config.urls.base}/login`;

const ExternalLink = ({ route, navigation }) => {
  const { source } = route.params;

  const onShouldStartLoadWithRequest = async (request) => {
    if (!source.headers || !source.headers.Authorization) {
      return true;
    }

    if (request.url.match(URL_LOGIN)) {
      try {
        const token = await ApiAuth.getToken();
        const data = {
          ...source,
          headers: {
            ...source.headers,
            Authorization: `Bearer ${token}`,
          }
        };

        navigation.replace('Login', { to: 'ExternalLink', replace: true, params: { source: data } });
      } catch (error) {
        console.log(error);
      }

      return false;
    }

    return true;
  };

  return (
    <SafeAreaView style={DefaultStyles.viewWhite}>
      <View style={styles.container}>
        <WebView
          onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
          source={{ ...source }}
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
    </SafeAreaView>
  );
};

ExternalLink.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

ExternalLink.defaultProps = {
  route: { params: false }
};


export default ExternalLink;
