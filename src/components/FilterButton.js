import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Styles = StyleSheet.create({
  card: {
    width: 105,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  description: {
    fontSize: 14,
    marginTop: 16,
    marginBottom: 24,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  containerImage: {
    height: 72,
    width: 72,
    borderRadius: 72,
    backgroundColor: '#e5e5e5',
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
          <Image style={Styles.containerImage} resizeMode="cover" />
          <Text style={Styles.description}>Cabelo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card} onPress={() => {}}>
          <Image style={Styles.containerImage} resizeMode="cover" />
          <Text style={Styles.description}>Unha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card} onPress={() => {}}>
          <Image style={Styles.containerImage} resizeMode="cover" />
          <Text style={Styles.description}>Maquiagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card} onPress={() => {}}>
          <Image style={Styles.containerImage} resizeMode="cover" />
          <Text style={Styles.description}>Tratamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card} onPress={() => {}}>
          <Image style={Styles.containerImage} resizeMode="cover" />
          <Text style={Styles.description}>Equipamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card} onPress={() => {}}>
          <Image style={Styles.containerImage} resizeMode="cover" />
          <Text style={Styles.description}>Profissional</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FilterButton;
