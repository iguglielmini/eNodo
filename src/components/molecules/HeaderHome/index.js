import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Badge from '@components/atoms/Badge';

/* Icons */
import FavoriteIcon from '@assets/svg/favorite';

import Styles from './styles';

function HeaderHome({
  title, theme, lengthCart, navigation
}) {
  return (
    <Title title={title} theme={theme} styleFont={Styles.title}>
      <TouchableOpacity onPress={() => {}}>
        <FavoriteIcon size={24} theme={theme} name="Favorite" />
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

export default HeaderHome;
