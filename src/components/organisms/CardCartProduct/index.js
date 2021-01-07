import React, { useState, Fragment } from "react";
import { View, Image, Text } from "react-native";

// Compoents
import Title from "@components/atoms/Title";
import ModalCep from "@components/organisms/ModalCep";
import QuantityProduct from "@components/atoms/QuantityProduct";

// icons
import DetailIcon from "@assets/svg/detail";

// Styles
import Styles from "./styles";

function CardCartProduct({ cart, removeProduct, selectQuantity }) {
  const { items } = cart;
  const [textCep, setTextCep] = useState("");
  const [modalCepVisible, setModalCepVisible] = useState(false);

  return (
    <>
      <View style={Styles.container}>
        {items.map((item, index) => {
          const key = index;
          const { product } = item;
          return (
            <Fragment key={key}>
              <View style={Styles.containerImageProduct}>
                <Image
                  style={Styles.imageProduct}
                  source={{
                    width: 640,
                    height: 640,
                    uri: product.image,
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
                removeProduct={() => removeProduct(key)}
                onSelect={(value) => selectQuantity(index, value)}
              />
            </Fragment>
          );
        })}
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
              {!textCep ? "Trocar CEP" : `CEP ${textCep}`}
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
