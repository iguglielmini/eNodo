import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

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
            <TouchableOpacity onPress={() => {}}>
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

export default ModalBuy;
