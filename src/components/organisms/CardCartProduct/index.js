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
import formatCep from '@/utils/format-cep';

// Styles
import Styles from './styles';

function CardCartProduct({
  cart,
  removeProduct,
  handleSaveCep,
  handleClearCep = null,
  selectQuantity,
}) {
  const { items, selectedDeliveryOption: delivery } = cart;
  const [modalCepVisible, setModalCepVisible] = useState(false);

  const formatedCep = cart?.postalCode ? formatCep(cart.postalCode) : null;

  const getDeliveryCaption = () => `${delivery.estimatedTime} via ${delivery.name} - ${convertToPriceText(
    delivery.amount
  )}\n`;

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
                stock={product.stock || 0}
                price={product.price}
                quantity={item.quantity}
                removeProduct={() => removeProduct(item.basketItemId)}
                onSelect={(value) => {
                  selectQuantity(index, value, item.basketItemId);
                }}
              />
            </Fragment>
          );
        })}
        {/* Add Location */}
        <View style={Styles.containerLocation}>
          <DetailIcon />
          <View style={Styles.containerTextLocation}>
            {formatedCep && delivery?.estimatedTime ? (
              <>
                <Title
                  style={Styles.AlignItems}
                  styleFont={Styles.titleLocation}
                  title="Pedidos feito hoje são entregues em"
                />
                <Text style={Styles.subTitleLocation}>
                  {getDeliveryCaption()}
                  <Text
                    style={Styles.cep}
                    onPress={() => setModalCepVisible(true)}
                  >
                    {`CEP ${formatedCep}`}
                  </Text>
                </Text>
              </>
            ) : (
              <Text style={Styles.descriptionSubTitle}>
                Digite seu cep para calcularmos o prazo de entrega. &nbsp;
                <Text
                  style={Styles.cep}
                  onPress={() => setModalCepVisible(true)}
                >
                  Informar CEP
                </Text>
              </Text>
            )}
            {/* Cep */}
            <ModalCep
              cepValue={formatedCep}
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
