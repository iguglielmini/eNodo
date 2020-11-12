import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Image
import UnhaImg from '../../../assets/images/unhas.png';
import CabeloImg from '../../../assets/images/cabelo.png';
import MaquiagemImg from '../../../assets/images/maquiagem.png';
import TratamentosImg from '../../../assets/images/tratamentos.png';
import EquipamentosImg from '../../../assets/images/equipamentos.png';
import profissionalImg from '../../../assets/images/profissional.png';

// Styles
import Styles from './styles';

const FilterButton = () => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.card} onPress={() => {}}>
        <Image
          style={Styles.containerImage}
          source={CabeloImg}
          resizeMode="cover"
        />
        <Text style={Styles.description}>Cabelo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.card} onPress={() => {}}>
        <Image
          style={Styles.containerImage}
          source={UnhaImg}
          resizeMode="cover"
        />
        <Text style={Styles.description}>Unha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.card} onPress={() => {}}>
        <Image
          style={Styles.containerImage}
          source={MaquiagemImg}
          resizeMode="cover"
        />
        <Text style={Styles.description}>Maquiagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.card} onPress={() => {}}>
        <Image
          style={Styles.containerImage}
          source={TratamentosImg}
          resizeMode="cover"
        />
        <Text style={Styles.description}>Tratamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.card} onPress={() => {}}>
        <Image
          style={Styles.containerImage}
          source={EquipamentosImg}
          resizeMode="cover"
        />
        <Text style={Styles.description}>Equipamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.card} onPress={() => {}}>
        <Image
          style={Styles.containerImage}
          source={profissionalImg}
          resizeMode="cover"
        />
        <Text style={Styles.description}>Profissional</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;
