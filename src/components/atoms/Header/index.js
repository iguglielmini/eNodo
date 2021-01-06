import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import ArrowVIcon from '@assets/svg/arrowv';
import FavoriteIcon from '@assets/svg/favorite';

import Styles from './styles';

function Header({ navigation }) {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <View style={Styles.container}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowVIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <FavoriteIcon />
        </TouchableOpacity>
      </View>
    </>
  );
}

Header.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Header;
