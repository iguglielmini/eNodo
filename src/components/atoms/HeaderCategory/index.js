import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

// Icons
import ArrowVIcon from '@assets/svg/arrowv';
import FavoriteIcon from '@assets/svg/favorite';
import BagOutlineIcon from '@assets/svg/bagOutline';

import Styles from './styles';

function HeaderCategory({ handleGoBack }) {
  function handleShowCart() {
    navigation.navigate('Cart');
  }

  return (
    <>
      <View style={Styles.ContainerHeader}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowVIcon color="#ffffff" />
        </TouchableOpacity>
        <View style={Styles.headerButtons}>
          <TouchableOpacity onPress={() => {}} style={Styles.buttonFavorite}>
            <FavoriteIcon color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShowCart} style={Styles.buttonBag}>
            <BagOutlineIcon color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

HeaderCategory.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HeaderCategory;
