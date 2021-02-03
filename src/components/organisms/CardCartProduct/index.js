import React, { useState, Fragment } from 'react';
import { View, Image, Text } from 'react-native';

// Compoents
import Title from '@components/atoms/Title';
import ModalCep from '@components/organisms/ModalCep';
import QuantityProduct from '@components/atoms/QuantityProduct';

// icons
import DetailIcon from '@assets/svg/detail';

// Utils
import { convertToPriceText } from '@modules/utils';

// Styles
import Styles from './styles';

function CardCartProduct({
  cart,
  textCep,
  removeProduct,
  handleSaveCep,
  handleClearCep,
  selectQuantity,
}) {
  const { items, selectedDeliveryOption } = cart;
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
            <Text style={Styles.subTitleLocation}>
              {selectedDeliveryOption
                ? `${selectedDeliveryOption.estimatedTime} via ${
                    selectedDeliveryOption.name
                  } - ${convertToPriceText(selectedDeliveryOption.amount)}\n`
                : '7 dia(s) útil(eis) após a postagen \ndos produtos.'}
              <Text
                style={Styles.textCep}
                onPress={() => setModalCepVisible(true)}
              >
                {!textCep ? 'Trocar CEP' : `CEP ${textCep}`}
              </Text>
            </Text>
            {/* Cep */}
            <ModalCep
              cepValue={textCep}
              visible={modalCepVisible}
              handleSave={handleSaveCep}
              handleClear={handleClearCep}
              setVisible={setModalCepVisible}
            />
          </View>
        </View>
      </View>
    </>
  );
}

export default CardCartProduct;
