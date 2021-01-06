import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, ScrollView
} from 'react-native';
import Modal from 'react-native-modal';

// Components
import CardCart from '@components/molecules/CardCart';

/** Styles */
import Styles from './styles';
// Icons
import CloseIcon from '../../../assets/svg/close';

function ModalBuy({ navigation, visible, setVisible }) {
  function handleShowCart() {
    navigation.navigate('Cart');
    setVisible(false);
  }
  return (
    <>
      <Modal
        onBackdropPress={() => setVisible(false)}
        isVisible={visible}
        style={Styles.modal}
      >
        <View style={Styles.cardModal}>
          <View style={Styles.containerTitle}>
            <Text style={Styles.Title}>Adicionado ao carrinho</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            contentContainerStyle={Styles.scrollView}
          >
            <View style={Styles.bodyModal}>
              <CardCart />
            </View>
          </ScrollView>
          {/* footer */}
          <View style={Styles.footerModal}>
            <TouchableOpacity onPress={() => handleShowCart()}>
              <Text style={Styles.BtnCart}>Ver carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={Styles.btnPayment}>Finalizar compra</Text>
            </TouchableOpacity>
          </View>
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

export default ModalBuy;
