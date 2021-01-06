import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';

// Compoents
import Title from '@components/atoms/Title';
import ModalCep from '@components/organisms/ModalCep';
import QuantityProduct from '@components/atoms/QuantityProduct';

// icons
import DetailIcon from '@assets/svg/detail';

// Mock Image
import ProductImage from '@assets/images/product1.png';

// Styles
import Styles from './styles';

function CardCartProduct({ selectQuantity, cart }) {
  const [modalCepVisible, setModalCepVisible] = useState(false);
  const [textCep, setTextCep] = useState('');

  return (
    <>
      <View style={Styles.container}>
        {/* Image Product */}
        <View style={Styles.containerImageProduct}>
          <Image style={Styles.imageProduct} source={ProductImage} />
        </View>
        {/* Title Image */}
        <View style={Styles.containerTitleProduct}>
          <Title
            title="Kérastase Genesis Anti-Chute Fortifiant - Sérum Finalizador - 90ml"
            styleFont={Styles.subTitle}
            style={Styles.AlignItems}
          />
        </View>
        {/* Add Product */}
        <QuantityProduct
          cart={cart}
          onSelect={selectQuantity}
        />
        {/* Add Location */}
        <View style={Styles.containerLocation}>
          <DetailIcon />
          <View style={Styles.containerTextLocation}>
            <Title
              title="Pedidos feito hoje são entregues"
              styleFont={Styles.titleLocation}
              style={Styles.AlignItems}
            />
            <Text style={Styles.subTitleLocation}>Qui 24 Dez - Grátis</Text>
            {/* Cep */}
            <Text
              style={Styles.textCep}
              onPress={() => setModalCepVisible(true)}
            >
              {!textCep ? 'Trocar CEP' : `CEP ${textCep}`}
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
    </>
  );
}
export default CardCartProduct;
