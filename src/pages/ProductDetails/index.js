import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

/* component */
import ListCard from '../../components/molecules/ListCard';
import Accordion from '../../components/organisms/Accordion';
import CarouselProduct from '../../components/organisms/CarouselPodruct';
import CarouselBuyTogether from '../../components/organisms/CarouselBuyTogether';

/** icons */
import ArrowVIcon from '../../assets/svg/arrowv';
import LogoIcon from '../../assets/svg/logoIcon';
import DetailIcon from '../../assets/svg/detail';
import FavoriteIcon from '../../assets/svg/favorite';
/** Styles */
import Styles from './styles';

function ProductDetails({ route, navigation }) {
  const { id } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      {/* Header */}
      <View style={Styles.ContainerHeader}>
        <TouchableOpacity onPress={handleGoBack}>
          <View style={Styles.btnImageIcon}>
            <ArrowVIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={Styles.btnImageIcon}>
            <FavoriteIcon />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* Carousel Product */}
        <CarouselProduct />
        {/* Title Product */}
        <View style={Styles.containerTitle}>
          <Text style={Styles.titleProduct}>KÉRASTASE</Text>
          <Text style={Styles.subTitle}>
            Kérastase Genesis Anti-Chute Fortifiant - Sérum Finalizador - 90ml
          </Text>
        </View>
        {/* Details Payment */}
        <View style={Styles.containerDescription}>
          <View style={Styles.detailsProduct}>
            <DetailIcon />
            <View style={Styles.description}>
              <Text style={Styles.descriptionTitle}>Frete Grátis</Text>
              <Text style={Styles.descriptionSubTitle}>
                Entrega em até 7 dias úteis após a postagem do produto.
              </Text>
            </View>
          </View>

          <View style={Styles.detailsProduct}>
            <LogoIcon />
            <View style={Styles.description}>
              <Text style={Styles.descriptionTitle}>Loja com estoque</Text>
              <Text style={Styles.descriptionSubTitle}>
                Av. Wenceslau Escobar. 2801 Tristeza, Porto Alegre-RS
              </Text>
            </View>
          </View>
        </View>
        {/* Accordion */}
        <Accordion />
        {/* Compre Junto Area */}
        <View style={Styles.containerCarouselPay}>
          <Text style={Styles.ClientPayTitle}>Compre junto</Text>
          <CarouselBuyTogether />
        </View>
        {/* Clientes Tambem Compraram Area */}
        <View style={Styles.ContainerClientPay}>
          <Text style={Styles.ClientPayTitle}>Clientes também compraram</Text>
          <ListCard navigation={navigation} />
        </View>
        {/* Produtos semelhantes */}
        <View style={Styles.ContainerClientPay}>
          <Text style={Styles.ClientPayTitle}>Produtos semelhantes</Text>
          <Text style={Styles.budget}>Cabelos › Finalizadores</Text>
          <ListCard navigation={navigation} />
        </View>
      </ScrollView>
      {/* Float button */}
      {/* linear-gradient(360deg, #F3F3F3 79.13%, rgba(243, 243, 243, 0) 117.39%); */}
      <LinearGradient
        start={{ x: 0, y: 0.9 }}
        end={{ x: 0.0, y: 0.0 }}
        locations={[0.8, 1]}
        colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
        style={Styles.ContainerFloatButon}
      >
        <View style={Styles.priceDescription}>
          <View style={Styles.priceTitles}>
            <Text style={Styles.newPrice}>R$ 305,23</Text>
            <Text style={Styles.lastPrice}>R$ 398,90</Text>
          </View>
          <View style={Styles.HowPayment}>
            <Text>10x de R$ 30,52</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View style={Styles.buttonPayment}>
            <Text style={Styles.payTitleButton}>Comprar</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}

ProductDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
