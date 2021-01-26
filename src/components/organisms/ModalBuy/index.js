import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux';
import EventBus from '@modules/services/EventBus';
import CardCart from '@components/molecules/CardCart';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// Redux
import { saveAddProductCart } from '@redux/actions';

/** Styles */
import CloseIcon from '@assets/svg/close';
import Styles from './styles';

function ModalBuy({ navigation, visible, setVisible, saveAddProductCart }) {
  function handleShowCart() {
    navigation.navigate('Cart');
    setVisible(false);
    saveAddProductCart([]);
  }

  function openCheckout() {
    EventBus.notify('goToCheckout', { navigation });
    setVisible(false);
    saveAddProductCart([]);
  }

  return (
    <>
      <Modal
        isVisible={visible}
        style={Styles.modal}
        onBackdropPress={() => setVisible(false)}
      >
        {/* Header */}
        <View style={Styles.cardModal}>
          <View style={Styles.containerTitle}>
            <Text style={Styles.Title}>Adicionado ao carrinho</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          {/* body */}
          <ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            contentContainerStyle={Styles.scrollView}
          >
            <CardCart />
          </ScrollView>
          {/* footer */}
          <LinearGradient
            start={{ x: 0, y: 0.9 }}
            end={{ x: 0.0, y: 0.0 }}
            locations={[0.8, 1]}
            colors={['#FFFFFF', 'rgba(255, 255, 255, 0)']}
            style={Styles.footerModal}
          >
            <TouchableOpacity onPress={() => handleShowCart()}>
              <Text style={Styles.BtnCart}>Ver carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openCheckout()}>
              <Text style={Styles.btnPayment}>Finalizar compra</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </>
  );
}

ModalBuy.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func.isRequired,
};

ModalBuy.defaultProps = {
  visible: false,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveAddProductCart,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(ModalBuy);
