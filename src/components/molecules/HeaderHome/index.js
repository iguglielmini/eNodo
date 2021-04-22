import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Badge from '@components/atoms/Badge';

/* Icons */
import FavoriteIcon from '@assets/svg/favorite';
import { BLACK } from '@assets/style/colors';

import Styles from './styles';

function HeaderHome({
  title, color, lengthCart, navigation, invertTitleTheme, user
}) {
  const theme = color === BLACK ? 'dark' : 'light';
  let titleTheme = theme;

  if (invertTitleTheme) {
    titleTheme = color === BLACK ? 'light' : 'dark';
  }

  function handlerFavorite() {
    if (user.id) {
      return navigation.navigate('Favorites');
    }
    return navigation.navigate('Login', {
      replace: true,
      to: 'Favorites',
      title: 'Favoritos',
    });
  }

  return (
    <Title title={title} theme={titleTheme} styleFont={Styles.title}>
      <TouchableOpacity onPress={handlerFavorite}>
        <FavoriteIcon size={24} color={color} name="Favorite" />
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
  color: PropTypes.string.isRequired,
  lengthCart: PropTypes.number.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  invertTitleTheme: PropTypes.bool
};

HeaderHome.defaultProps = {
  title: '',
  invertTitleTheme: false,
};

const mapStateToProps = store => ({
  user: store.user,
});

export default connect(
  mapStateToProps,
  null
)(HeaderHome);
