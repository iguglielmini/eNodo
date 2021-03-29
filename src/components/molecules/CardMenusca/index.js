import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useToast } from '@components/molecules/Toast';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import { favoritesUser } from '@redux/actions';
import ApiProfile from '@modules/api/api-profile';
import { convertToPriceText } from '@modules/utils';
import DeviceStorage from '@modules/services/device-storage';

// Icons
import FavoriteIcon from '@assets/svg/favorite';

// Styles
import { BLACK } from '@assets/style/colors';
import Styles from './styles';

function CardMenusca(props) {
  const { item, navigation, user, favorites } = props;
  const { image, title, price, id, slug, sku } = item;

  const { open: openToast } = useToast();

  const findFavorited =
    favorites && favorites.find(productItem => productItem.product === id);
  const [isFavorited, setFavorited] = useState(findFavorited || false);


  function handlerOnFavorite() {
    if (!user.id) return navigation.navigate('Login');

    if (!isFavorited) addFavorite();
    else removeFavorite();
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
    <View style={Styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={Styles.card}
        onPress={() => navigation.navigate('ProductDetails', { slug, id, sku })}
      >
        <ImageBackground
          resizeMode="cover"
          style={Styles.containerImage}
          source={{ uri: image.url, ...image }}
        >
          <TouchableOpacity
            onPress={handlerOnFavorite}
            style={Styles.favoriteBtn}
          >
            <FavoriteIcon size={18} fill={isFavorited ? BLACK : 'none'} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={Styles.contentDescription}>
          <Text style={Styles.description}>{title}</Text>
          <View style={Styles.priceContainer}>
            <Text style={[Styles.priceText, Styles.priceItem]}>
              {convertToPriceText(price.current)}
            </Text>
            {price.previous && (
              <Text style={[Styles.priceText, Styles.pricelater]}>
                {convertToPriceText(price.previous)}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = store => ({
  user: store.user,
  favorites: store.user.favorites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ favoritesUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardMenusca);
