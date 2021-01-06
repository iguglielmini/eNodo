import React, { Component } from 'react';
import { TextInput } from 'react-native';
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
      typeInput
    } = this.props;

    let textInput = (
      <TextInput
        {...this.props}
        style={[Styles.input]}
        ref={(ref) => { this.ref = ref; }}
      />
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
