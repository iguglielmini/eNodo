import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Icons
import ArrowV from '../../../assets/svg/arrowRight';
// Styles
import Styles from './styles';

const LinkHelp = () => {
  return (
    <View style={Styles.containerHelp}>
      <TouchableOpacity onPress={() => {}}>
        <View style={Styles.btnHelp}>
          <Text style={Styles.titleHelp}>Ajuda</Text>
          <ArrowV />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={Styles.btnHelp}>
          <Text style={Styles.titleHelp}>Nossa Loja</Text>
          <ArrowV />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={Styles.btnHelp}>
          <Text style={Styles.titleHelp}>Formas de Pagamentos</Text>
          <ArrowV />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={Styles.btn}>
          <Text style={Styles.titleHelp}>Mais Belshop</Text>
          <ArrowV />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LinkHelp;
