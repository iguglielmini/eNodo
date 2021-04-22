import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import kissImage from '@assets/images/kiss.png';
import Styles from './styles';

class LoadError extends Component {
  state = {};

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { route, navigation } = this.props;

    if (!route.params?.reload) navigation.navigate('OnBoarding');
  }

  render() {
    const { route, navigation } = this.props;

    if (!route.params?.reload) return null;
    return (
      <View style={Styles.container}>
        <View style={Styles.imageContainer}>
          <Image source={kissImage} />
        </View>
        {route.params?.page ? (
          <>
            <Text style={Styles.title}>Essa página não pode ser carregada</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(route.params?.page)}
              style={Styles.reloadButton}
            >
              <Text>Tentar novamente</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={Styles.title}>
            Falha ao carregar, por favor reinicie o app
          </Text>
        )}
      </View>
    );
  }
}

export default LoadError;
