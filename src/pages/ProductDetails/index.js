import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

/* component */
import ListCard from '../../components/ListCard';
import Accordion from '../../components/Accordion';
import CarouselProduct from '../../components/CarouselProduct';

/** icons */
import ArrowVIcon from '../../assets/svg/arrowv';
import LogoIcon from '../../assets/svg/logoIcon';
import DetailIcon from '../../assets/svg/detail';
import FavoriteIcon from '../../assets/svg/favorite';
import CarouselBuyTogether from '../../components/CarouselBuyTogether';

const Styles = StyleSheet.create({
  containerTitle: {
    padding: 20,
    marginRight: 12,
    marginLeft: 12,
  },
  titleProduct: {
    fontSize: 12,
    color: '#ff2bb7',
    marginTop: 15,
  },
  subTitle: {
    fontSize: 16,
    color: '#070814',
    marginTop: 16,
  },
  detailsProduct: {
    padding: 20,
    marginRight: 12,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerDescription: {
    borderBottomWidth: 2,
    borderBottomColor: '#A1A6AF',
  },
  description: {
    marginLeft: 10,
    width: '90%',
  },
  descriptionTitle: {
    color: '#000000',
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 5,
  },
  descriptionSubTitle: {
    color: '#000000',
    opacity: 0.5,
  },
  ContainerClientPay: {
    padding: 15,
  },
  ClientPayTitle: {
    fontSize: 18,
    color: '#070814',
    marginTop: 40,
    marginLeft: 24,
    marginBottom: 40,
    width: '50%',
  },
  budget: {
    marginBottom: 40,
    marginLeft: 24,
    fontSize: 12,
  },
  ContainerFloatButon: {
    backgroundColor:
      'linear-gradient(360deg, #F3F3F3 79.13%, rgba(243, 243, 243, 0) 117.39%)',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  priceTitles: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  newPrice: {
    color: '#DB207F',
    marginRight: 10,
  },
  lastPrice: {
    color: '#a1a6af',
    textDecorationLine: 'line-through',
  },
  HowPayment: {
    fontWeight: '400',
    color: '#0d0d0d',
  },
  buttonPayment: {
    backgroundColor: '#0d0d0d',
    borderRadius: 5,
    padding: 20,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payTitleButton: {
    color: '#f1f1f1',
  },
  ContainerHeader: {
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    zIndex: 9999,
    marginTop: 42,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
  },
  btnImageIcon: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

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
        <View style={Styles.ContainerClientPay}>
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
      <View style={Styles.ContainerFloatButon}>
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
      </View>
    </>
  );
}

ProductDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
