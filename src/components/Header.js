import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import ArrowVIcon from '../assets/svg/arrowv';
import FavoriteIcon from '../assets/svg/favorite';

const Styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

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
