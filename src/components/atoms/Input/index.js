import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Styles from './styles';

class Input extends Component {
  componentDidMount() {
    const { onRef } = this.props;
    if (onRef) onRef(this.ref);
  }

  render() {
    const { typeInput, onChangeText, onErrorText, style } = this.props;

    if (typeInput === 'cep') {
      return (
        <TextInputMask
          {...this.props}
          type="zip-code"
          style={[Styles.CEPinput, style]}
          options={{
            mask: '99999-999',
          }}
          onChangeText={onChangeText}
          ref={ref => {
            this.ref = ref;
          }}
        />
      );
    }

    return (
      <>
        <TextInput
          {...this.props}
          style={[
            Styles.input,
            style,
            onErrorText && Styles.inputError,
          ]}
          ref={ref => {
            this.ref = ref;
          }}
        />
        {onErrorText && <Text style={Styles.textError}>{onErrorText}</Text>}
      </>
    );
  }
}

export default Input;
