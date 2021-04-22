import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Styles from './styles';

class Input extends Component {
  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this.ref);
  }

  onChange = (value) => {
    if (!this.props.onChangeText) return;
    this.props.onChangeText(value);
  }

  render() {
    const {
      typeInput, errorText,
    } = this.props;

    let textInput = (
      <>
        <TextInput
          style={[Styles.input]}
          ref={(ref) => { this.ref = ref; }}
          {...this.props}
        />
        {errorText && (
          <Text style={[Styles.inputErrorMessage]}>{errorText}</Text>
        )}
      </>
    );

    if (typeInput === 'cep') {
      textInput = (
        <TextInputMask
          {...this.props}
          style={[Styles.CEPinput]}
          type="zip-code"
          options={{
            mask: '99999-999'
          }}
          onChangeText={this.onChange}
          ref={(ref) => { this.ref = ref; }}
        />
      );
    }

    return textInput;
  }
}

export default Input;
