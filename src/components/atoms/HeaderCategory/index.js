import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Badge from '@components/atoms/Badge';
import { View, TouchableOpacity } from 'react-native';

// Icons
import ArrowVIcon from '@assets/svg/arrowv';
import FavoriteIcon from '@assets/svg/favorite';

import Styles from './styles';

function HeaderCategory({
  user,
  theme,
  navigation,
  lengthCart,
  handleGoBack,
  hideOptionsButtons,
}) {
  function handlerFavorite() {
    if (user.id) {
      return navigation.navigate('FilterResult', {
        hideFilterButton: true,
        title: 'Favoritos',
        isFavorite: true,
      });
    }
    return navigation.navigate('Login');
  }

  function handleShowCart() {
    navigation.navigate('Cart');
  }

  return (
    <>
      <View style={Styles.ContainerHeader}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowVIcon color="#ffffff" />
        </TouchableOpacity>
        {!hideOptionsButtons && (
          <View style={Styles.headerButtons}>
            <TouchableOpacity
              onPress={handlerFavorite}
              style={Styles.buttonFavorite}
            >
              <FavoriteIcon color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShowCart} style={Styles.buttonBag}>
              <Badge count={lengthCart} theme={theme} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
}

HeaderCategory.propTypes = {
  theme: PropTypes.string,
  lengthCart: PropTypes.number,
  hideOptionsButtons: PropTypes.bool,
  handleGoBack: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

HeaderCategory.defaultProps = {
  lengthCart: 0,
  theme: 'dark',
  hideOptionsButtons: false,
};

const mapStateToProps = store => ({
  user: store.user,
});

export default connect(
  mapStateToProps,
  null
)(HeaderCategory);
