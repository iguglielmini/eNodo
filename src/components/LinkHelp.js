import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ArrowV from '../assets/svg/arrowv';

const Styles = StyleSheet.create({
  containerHelp: {
    marginTop: 67,
    flexDirection: 'column',
  },
  btn: {
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnHelp: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingRight: 32,
    paddingLeft: 32,
    borderBottomColor: '#A1A6AF',
    justifyContent: 'space-between',
  },
  titleHelp: {
    fontSize: 18,
    marginTop: 16,
    marginBottom: 16,
  },
});
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
