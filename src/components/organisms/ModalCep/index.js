import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Alert
} from 'react-native';
import Modal from 'react-native-modal';

// Component
import Input from '../../atoms/Input';
/** Styles */
import Styles from './styles';
// Icons
import CloseIcon from '../../../assets/svg/close';

function ModalCep({
  visible, setVisible, onChangeCep, cepValue = ''
}) {
  const [textCep, setTextCep] = useState(cepValue);
  const [inputRef, setInputRef] = useState(null);

  function handleOnShow() {
    inputRef.focus();
  }

  function handleSave() {
    if (textCep.length < 9) {
      Alert.alert('CEP Inválido');
      return;
    }

    onChangeCep(textCep);
    setVisible(false);
  }

  function handleClear() {
    onChangeCep('');
    setTextCep('');
    setVisible(false);
  }

  return (
    <Modal
      onBackdropPress={() => setVisible(false)}
      isVisible={visible}
      style={Styles.modal}
      avoidKeyboard
      onModalShow={handleOnShow}
    >
      <View style={Styles.cardModal}>
        <TouchableOpacity style={Styles.closeBtn} onPress={() => setVisible(false)}>
          <CloseIcon />
        </TouchableOpacity>
        <View style={Styles.containerTitle}>
          <Text style={Styles.Title}>Qual sua localização?</Text>
        </View>
        <View style={Styles.bodyModal}>
          <Text style={Styles.label}>CEP</Text>
          <Input typeInput="cep" onChangeText={setTextCep} refInput={r => setInputRef(r)} value={textCep} />
        </View>
        <View style={Styles.footerModal}>
          <TouchableOpacity onPress={handleSave}>
            <Text style={Styles.btnSave}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClear}>
            <Text style={Styles.btnClear}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

ModalCep.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func.isRequired,
  onChangeCep: PropTypes.func,
};
ModalCep.defaultProps = {
  visible: false,
  onChangeCep: () => {},
};

export default ModalCep;
