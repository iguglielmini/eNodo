import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, ScrollView
} from 'react-native';
import Modal from 'react-native-modal';

/** Styles */
import Styles from './styles';
// Icons
import CloseIcon from '../../../assets/svg/close';

const ModalDetails = ({ visible, setVisible, details }) => (
  <Modal
    onBackdropPress={() => setVisible(false)}
    isVisible={visible}
    style={Styles.modal}
  >
    <View style={Styles.cardModal}>
      <View style={Styles.containerTitle}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <ScrollView
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        style={Styles.scrollView}
      >
        <View style={Styles.bodyModal}>
          <Text style={Styles.Title}>{details.title}</Text>
          <Text style={Styles.paragraphyModal}>{details.content}</Text>
        </View>
      </ScrollView>
    </View>
  </Modal>
);

ModalDetails.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func.isRequired,
};

ModalDetails.defaultProps = {
  visible: false,
};

export default ModalDetails;
