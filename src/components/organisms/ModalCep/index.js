import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

// Styles

export const ModalCep = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={onOpen}>
          <Text>Trocar CEP</Text>
        </TouchableOpacity>

        <Modalize ref={modalizeRef}>
          <View>
            <Text>Cep</Text>
          </View>
        </Modalize>
      </View>
    </>
  );
};
