import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ApiAuth from '@modules/api/api-auth';

// Icons
import ArrowV from '@assets/svg/arrowRight';

import config from '@/config';
import Styles from './styles';

function LinkHelp({ data, theme }) {
  if (!data.length) return null;
  const navigation = useNavigation();

  async function onClick(item) {
    const {
      url, auth, callback
    } = item;

    if (callback) {
      return callback();
    }

    const source = {
      uri: url.match(/^https/) ? url : `${config.urls.base}${url}`,
    };

    if (auth) {
      const token = await ApiAuth.getToken();

      source.headers = {
        'x-api-key': config.apiKey,
        Authorization: `Bearer ${token}`
      };
    }
    if (item.url === 'app://config') {
      return navigation.navigate('Notification');
    }
    return navigation.navigate('ExternalLink', { source });
  }

  return (
    <>
      <View style={Styles.containerHelp}>
        {data.map((item, index) => {
          const key = index;
          return (
            <TouchableOpacity key={key} onPress={() => onClick(item)}>
              <View style={[Styles.btnHelp, (key === data.length - 1) && Styles.borderNone]}>
                <Text style={[Styles.titleHelp, Styles[theme]]}>{item.title}</Text>
                <ArrowV color={Styles[theme].color} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

LinkHelp.propTypes = {
  theme: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

LinkHelp.defaultProps = {
  theme: 'dark',
};

export default LinkHelp;
