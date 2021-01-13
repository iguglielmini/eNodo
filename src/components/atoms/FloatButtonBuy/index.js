import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LinearGradient from "react-native-linear-gradient";
import { View, Text, TouchableOpacity } from "react-native";

// Compoment
import ModalBuy from "@components/organisms/ModalBuy";

// API
import ApiCart from "../../../modules/api/api-shopping";

// Redux
import { saveLengthCart } from "../../../redux-store/actions/cart";

/** Styles */
import Styles from "./styles";

function FloatButtonBuy({ navigation, product, saveLengthCart }) {
  const [loading, setLoading] = useState(false);
  const [modalBuyVisible, setModalBuyVisible] = useState(false);

  function addProductToCart() {
    setLoading(true);

    const data = {
      products: [{ product: product.id, sku: product.sku, quantity: 1 }],
    };
    ApiCart.basketAddItem(data)
      .then((response) => {
        setLoading(false);
        setModalBuyVisible(true);
        
        if (response && response.basket) {
          const { items } = response.basket;
          const itemsQuantity = items.map(item => item.quantity);
          saveLengthCart(itemsQuantity.reduce((acumulator, currentValue) => acumulator + currentValue));
        }
      })
      .catch(() => setLoading(false));
  }

  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0.9 }}
        end={{ x: 0.0, y: 0.0 }}
        locations={[0.8, 1]}
        colors={["#F3F3F3", "rgba(243, 243, 243, 0)"]}
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
        <TouchableOpacity onPress={addProductToCart}>
          <View style={Styles.buttonPayment}>
            <Text style={Styles.payTitleButton}>
              {loading ? "Carregando..." : "Comprar"}
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>

      <ModalBuy
        navigation={navigation}
        visible={modalBuyVisible}
        setVisible={setModalBuyVisible}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      saveLengthCart,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(FloatButtonBuy);
