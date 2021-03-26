import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Icons
import ArrowVIcon from '@assets/svg/arrowv';

import Styles from './styles';

function HeaderCart({ navigation }) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.9 }}
        locations={[0.8, 1]}
        colors={['#FFFFFF', 'rgba(255, 255, 255, 0)']}
        style={Styles.ContainerHeader}
      >
        <View style={Styles.headerButtons}>
          {/* Btn Go back */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={Styles.btnImageIcon}>
              <ArrowVIcon />
            </View>
          </TouchableOpacity>
          {/* Title header */}
          <View style={Styles.ContainerTitle}>
            <Text style={Styles.TitleHeader}>Carrinho</Text>
          </View>
        </View>
        {/* Title Price */}
        <View style={Styles.containerTitlePrice}>
          <Text style={Styles.TitleHeader}>R$ 305,00</Text>
        </View>
      </LinearGradient>
    </>
  );
}

HeaderCart.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HeaderCart;
