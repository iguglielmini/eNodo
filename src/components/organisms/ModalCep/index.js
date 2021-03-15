import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Input from '@components/atoms/Input';
import {
  View, Text, TouchableOpacity,
} from 'react-native';

// Icons
import CloseIcon from '@assets/svg/close';
import { useToast } from '@components/molecules/Toast';

/** Styles */
import Styles from './styles';

function ModalCep({
  visible,
  handleSave,
  setVisible,
  handleClear,
  cepValue = '',
}) {
  const [textCep, setTextCep] = useState(cepValue);
  const [inputRef, setInputRef] = useState(null);
  const { open: openToast } = useToast();

  function handleOnShow() {
    inputRef.focus();
  }

  function handleSubmit() {
    if (textCep.length < 9) {
      openToast({
        title: 'Localização',
        message: 'CEP Inválido',
        type: 'error',
      });

      return;
    }

    setVisible(false);
    handleSave(textCep);
  }

  function handleClearCep() {
    handleClear();
    setTextCep('');
    setVisible(false);
  }

  return (
    <Modal
      avoidKeyboard
      isVisible={visible}
      style={Styles.modal}
      onModalShow={handleOnShow}
      onBackdropPress={() => setVisible(false)}
    >
      <View style={Styles.cardModal}>
        <TouchableOpacity
          style={Styles.closeBtn}
          onPress={() => setVisible(false)}
        >
          <CloseIcon />
        </TouchableOpacity>
        <View style={Styles.containerTitle}>
          <Text style={Styles.Title}>Qual sua localização?</Text>
        </View>
        <View style={Styles.bodyModal}>
          <Text style={Styles.label}>CEP</Text>
          <Input
            typeInput="cep"
            value={textCep}
            onChangeText={setTextCep}
            refInput={r => setInputRef(r)}
          />
        </View>
        <View style={Styles.footerModal}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={Styles.btnSave}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClearCep}>
            <Text style={Styles.btnClear}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

ModalCep.propTypes = {
  visible: PropTypes.bool,
  handleSave: PropTypes.func.isRequired,
  setVisible: PropTypes.func.isRequired,
};
ModalCep.defaultProps = {
  visible: false,
};

export default ModalCep;
