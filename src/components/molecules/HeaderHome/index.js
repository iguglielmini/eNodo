import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Badge from '@components/atoms/Badge';

/* Icons */
import FavoriteIcon from '@assets/svg/favorite';

import Styles from './styles';

function HeaderHome({
  title, theme, lengthCart, navigation, user
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

  return (
    <Title title={title} theme={theme} styleFont={Styles.title}>
      <TouchableOpacity onPress={handlerFavorite}>
        <FavoriteIcon size={24} theme={theme} />
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.bagIcon}
        onPress={() => navigation.navigate('Cart')}
      >
        <Badge count={lengthCart} theme={theme} />
      </TouchableOpacity>
    </Title>
  );
}

HeaderHome.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string.isRequired,
  lengthCart: PropTypes.number.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

HeaderHome.defaultProps = {
  title: '',
};

const mapStateToProps = store => ({
  user: store.user,
});

export default connect(
  mapStateToProps,
  null
)(HeaderHome);
