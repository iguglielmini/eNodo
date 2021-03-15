import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@components/atoms/Badge';
import { View, TouchableOpacity } from 'react-native';

// Icons
import ArrowVIcon from '@assets/svg/arrowv';
import FavoriteIcon from '@assets/svg/favorite';

import Styles from './styles';

function HeaderCategory({
  handleGoBack, navigation, lengthCart, theme
}) {
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
            <Badge count={lengthCart} theme={theme} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

HeaderCategory.propTypes = {
  theme: PropTypes.string,
  lengthCart: PropTypes.number,
  handleGoBack: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

HeaderCategory.defaultProps = {
  lengthCart: 0,
  theme: 'dark',
};

export default HeaderCategory;
