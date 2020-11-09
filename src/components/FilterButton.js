import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// Image
import CabeloImg from '../assets/images/cabelo.png';
import UnhaImg from '../assets/images/unhas.png';
import TratamentosImg from '../assets/images/tratamentos.png';
import MaquiagemImg from '../assets/images/maquiagem.png';
import EquipamentosImg from '../assets/images/equipamentos.png';
import profissionalImg from '../assets/images/profissional.png';

const { width } = Dimensions.get('window');

const Styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 105,
    marginTop: 48,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 14,
    marginTop: 16,
    marginBottom: 24,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  containerImage: {
    width: 72,
    height: 72,
    borderRadius: 72,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

const FilterButton = () => {
  return (
    <>
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
    </>
  );
};

export default FilterButton;
