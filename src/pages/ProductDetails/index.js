import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ScrollView, TouchableOpacity
} from 'react-native';


/* component */
import ListCard from '@components/molecules/ListCard';
import ModalCep from '@components/organisms/ModalCep';
import Accordion from '@components/organisms/Accordion';
import FloatButtonBuy from '@components/atoms/FloatButtonBuy';
import ModalDetails from '@components/organisms/ModalDetails';
import CarouselProduct from '@components/organisms/CarouselPodruct';
import CarouselBuyTogether from '@components/organisms/CarouselBuyTogether';

/** icons */
import ArrowVIcon from '@assets/svg/arrowv';
import LogoIcon from '@assets/svg/logoIcon';
import DetailIcon from '@assets/svg/detail';
import FavoriteIcon from '@assets/svg/favorite';

// Mock
import CardlistMock from '@mock/CardListMock';
import CardBuyTogetherMock from '@mock/CardBuyTogetherMock';

/** Styles */
import Styles from './styles';

function ProductDetails({ route, navigation }) {
  const { id } = route.params;
  const [modalCepVisible, setModalCepVisible] = useState(false);
  const [modalDetailsVisible, setModalDetailsVisible] = useState(false);
  const [details, setDetails] = useState({});
  const [textCep, setTextCep] = useState('');
  console.log(id);

  function handleGoBack() {
    navigation.goBack();
  }

  function showModalDetails(item) {
    setModalDetailsVisible(!modalDetailsVisible);
    setDetails(item);
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
      <ScrollView
        contentContainerStyle={Styles.ContainerScroll}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
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
              <View style={Styles.modalContainer}>
                <Text style={Styles.descriptionSubTitle}>
                  Entrega em até 7 dias úteis após a postagem do produto. &nbsp;
                  <Text
                    style={Styles.btnModal}
                    onPress={() => setModalCepVisible(true)}
                  >
                    {!textCep ? 'Trocar CEP' : `CEP ${textCep}`}
                  </Text>
                </Text>
                <ModalCep
                  visible={modalCepVisible}
                  setVisible={setModalCepVisible}
                  onChangeCep={setTextCep}
                  cepValue={textCep}
                />
              </View>
            </View>
          </View>

          <View style={Styles.detailsProduct}>
            <LogoIcon />
            <View style={Styles.description}>
              <Text style={Styles.descriptionTitle}>Loja com estoque</Text>
              <Text style={Styles.descriptionSubTitle}>
                Av. Wenceslau Escobar. 2801 Tristeza, Porto Alegre-RS &nbsp;
                <Text style={Styles.btnModal} onPress={() => {}}>
                  Outras lojas
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* Accordion */}
        <View style={Styles.containerAccordion}>
          <Accordion actionMore={showModalDetails} />
          <ModalDetails
            visible={modalDetailsVisible}
            setVisible={setModalDetailsVisible}
            details={details}
          />
        </View>
        {/* Compre Junto Area */}
        <View style={Styles.containerCarouselPay}>
          <Text style={Styles.ClientPayTitle}>Compre junto</Text>
          <CarouselBuyTogether data={CardBuyTogetherMock} />
        </View>
        {/* Clientes Tambem Compraram Area */}
        <View style={Styles.ContainerClientPay}>
          <Text style={Styles.ClientPayTitle}>Clientes também compraram</Text>
          <ListCard data={CardlistMock} navigation={navigation} />
        </View>
        {/* Produtos semelhantes */}
        <View style={Styles.ContainerProductSimilar}>
          <Text style={Styles.ClientPayTitle}>Produtos semelhantes</Text>
          <Text style={Styles.budget}>Cabelos › Finalizadores</Text>
          <ListCard data={CardlistMock} navigation={navigation} />
        </View>
      </ScrollView>
      {/* Modal But */}
      {/* Float button */}
      <FloatButtonBuy navigation={navigation} />
    </>
  );
}

ProductDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
