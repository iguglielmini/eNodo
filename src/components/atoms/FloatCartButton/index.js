import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import EventBus from '@modules/services/EventBus';
import Styles from './styles';

function FloatCartButton({ navigation }) {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0.9 }}
        end={{ x: 0.0, y: 0.0 }}
        locations={[0.8, 1]}
        colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
        style={Styles.ContainerFloatButon}
      >
        <TouchableOpacity onPress={() => { EventBus.notify('goToCheckout', { navigation }); }}>
          <View style={Styles.btnPayment}>
            <Text style={Styles.text}>Fazer pagamento</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoBack}>
          <View style={Styles.btnGoBack}>
            <Text style={Styles.textBack}>Continue comprando</Text>
          </View>
        </TouchableOpacity>

      </LinearGradient>
    </>
  );
}

FloatCartButton.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FloatCartButton;
