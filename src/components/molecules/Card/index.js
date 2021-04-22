/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useToast } from '@components/molecules/Toast';
import { useNavigation } from '@react-navigation/native';
import {
  View, ImageBackground, Text, TouchableOpacity
} from 'react-native';

// Utils and APIS
import { favoritesUser } from '@redux/actions';
import ApiProfile from '@modules/api/api-profile';
import DeviceStorage from '@modules/services/device-storage';
import { convertToPriceText, convertDiscount } from '@modules/utils';

// Icons
import BadgeIcon from '@assets/svg/badge';
import FavoriteIcon from '@assets/svg/favorite';

// Images
import NotFoundImage from '@assets/images/notfound.png';

// Styles
import { BLACK } from '@assets/style/colors';
import Styles from './styles';

function Card(props) {
  const {
    item, style, theme, onClick, user, favorites
  } = props;
  const {
    id, slug, sku, title, price, image, available
  } = item;

  const { discount, current, previous } = price;

  const itemDetails = {
    slug,
    id,
    sku,
    title,
    price,
    image,
    available,
  };

  const navigation = useNavigation();
  const { open: openToast } = useToast();

  const findFavorited = favorites && favorites.find(productItem => productItem.product === id);
  const [isFavorited, setFavorited] = useState(findFavorited || false);

  function handlerOnFavorite() {
    if (!user.id) {
      return navigation.navigate('Login', {
        replace: true,
        to: 'Favorites',
        title: 'Favoritos',
      });
    }

    if (!isFavorited) addFavorite();
    else removeFavorite();

    return null;
  }

  function addFavorite() {
    ApiProfile.addFavorites(id, sku)
      .then(({ data }) => {
        openToast({
          type: 'success',
          title: 'Favoritos',
          message: 'Produto adicionado aos Favoritos!',
        });
        DeviceStorage.setItem('@BelshopApp:favorites', data.items);
        props.favoritesUser(data.items);
      })
      .catch(() => {
        openToast({
          type: 'error',
          title: 'Ooops!',
          message: 'Não foi possível adicionar o produto aos Favoritos.',
        });
      });
  }

  function removeFavorite() {
    ApiProfile.deleteFavorites(id, sku)
      .then(({ data }) => {
        openToast({
          type: 'success',
          title: 'Favoritos',
          message: 'Produto deletado dos Favoritos!',
        });
        DeviceStorage.setItem('@BelshopApp:favorites', data.items);
        props.favoritesUser(data.items);
      })
      .catch(() => {
        openToast({
          type: 'error',
          title: 'Ooops!',
          message: 'Não foi possível deletar o produto dos Favoritos.',
        });
      });
  }

  useEffect(() => {
    setFavorited(findFavorited);
  }, [favorites, findFavorited, setFavorited]);

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={[Styles.card, style]}
        onPress={() => onClick(itemDetails)}
      >
        <ImageBackground
          resizeMode="cover"
          style={Styles.containerImage}
          source={
            !image
              ? NotFoundImage
              : {
                ...image,
                uri: image.url,
              }
          }
        >
          <TouchableOpacity
            style={Styles.favoriteBtn}
            onPress={handlerOnFavorite}
          >
            <FavoriteIcon size={24} fill={isFavorited ? BLACK : 'none'} />
          </TouchableOpacity>
        </ImageBackground>
        {discount && (
          <View style={Styles.discount}>
            <BadgeIcon size={48} />
            <Text style={Styles.discountText}>
              {convertDiscount(discount)}
              %
            </Text>
          </View>
        )}
        <Text style={[Styles[theme], Styles.description]}>{title}</Text>
        <View style={Styles.priceContainer}>
          {available ? (
            <Text style={[Styles.priceText, Styles.priceItem]}>
              {convertToPriceText(current)}
            </Text>
          ) : (
            <Text
              style={
                theme === 'dark'
                  ? [Styles.unavailableItem, Styles.darkUnavailable]
                  : [Styles.unavailableItem, Styles.lightUnavailable]
              }
            >
              Produto indisponível
            </Text>
          )}
          {previous && (
            <Text style={[Styles.priceText, Styles.pricelater]}>
              {convertToPriceText(previous)}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

Card.propTypes = {
  theme: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

Card.defaultProps = {
  style: null,
  theme: 'light',
  onClick: () => {},
};

const mapStateToProps = store => ({
  user: store.user,
  favorites: store.user.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators({ favoritesUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
