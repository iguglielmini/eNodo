import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

/* component */
import CarouselProduct from '../../components/CarouselProduct';
import DetailIcon from '../../assets/svg/detail';

const Styles = StyleSheet.create({
  containerTitle: {
    padding: 20,
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
});

function ProductDetails({ route }) {
  const { id } = route.params;

  return (
    <>
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
            <DetailIcon />
            <View style={Styles.description}>
              <Text style={Styles.descriptionTitle}>Loja com estoque</Text>
              <Text style={Styles.descriptionSubTitle}>
                Av. Wenceslau Escobar. 2801 Tristeza, Porto Alegre-RS
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

ProductDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
