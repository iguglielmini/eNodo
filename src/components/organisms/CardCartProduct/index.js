import React, { useState, Fragment } from 'react';
import { View, Image, Text } from 'react-native';

// Compoents
import Title from '@components/atoms/Title';
import ModalCep from '@components/organisms/ModalCep';
import QuantityProduct from '@components/atoms/QuantityProduct';

// icons
import DetailIcon from '@assets/svg/detail';

// Styles
import Styles from './styles';

function CardCartProduct({
  cart,
  removeProduct,
  handleSaveCep,
  selectQuantity,
}) {
  const { items } = cart;
  const [textCep, setTextCep] = useState('');
  const [modalCepVisible, setModalCepVisible] = useState(false);

  return (
    <>
      <View style={Styles.container}>
        {items.map((item, index) => {
          const key = index;
          const { product } = item;
          const { image } = product;

          return (
            <Fragment key={key}>
              <View style={Styles.containerImageProduct}>
                <Image
                  resizeMode="contain"
                  style={Styles.imageProduct}
                  source={{
                    uri: image.url,
                    width: image.width,
                    height: image.height,
                  }}
                />
              </View>
              <View style={Styles.containerTitleProduct}>
                <Title
                  title={product.title}
                  style={Styles.AlignItems}
                  styleFont={Styles.subTitle}
                />
              </View>
              <QuantityProduct
                price={product.price}
                quantity={item.quantity}
                removeProduct={() => removeProduct(item.basketItemId)}
                onSelect={value =>
                  selectQuantity(index, value, item.basketItemId)
                }
              />
            </Fragment>
          );
        })}
        {/* Add Location */}
        <View style={Styles.containerLocation}>
          <DetailIcon />
          <View style={Styles.containerTextLocation}>
            <Title
              style={Styles.AlignItems}
              styleFont={Styles.titleLocation}
              title="Pedidos feito hoje são entregues"
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
              cepValue={textCep}
              visible={modalCepVisible}
              handleSave={handleSaveCep}
              setVisible={setModalCepVisible}
            />
          </View>
        </View>
      </View>
    </>
  );
}

export default CardCartProduct;
