import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
/* Components */
import Input from '@components/atoms/Input';
import Title from '@components/atoms/Title';
// Icons
import ArrowVIcon from '@assets/svg/arrowv';

/** Styles */
import Styles from './styles';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={Styles.saveArea}>
        {/* Header */}
        <View style={Styles.contentHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowVIcon />
          </TouchableOpacity>
        </View>
        {/* content */}
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          <View style={Styles.container}>
            {/* Title */}
            <Title title="Esqueceu a senha?" style={Styles.TitleForgot} />
            {/* Subtitle */}
            <View style={Styles.contentSubTitle}>
              <Text style={Styles.subTitleForgot}>
              Digite seu endereço de e-mail para poder redefinir sua senha.
              </Text>
            </View>
            {/* Input */}
            <View style={Styles.InputContent}>
              <Input
                textContentType="emailAddress"
                autoCompleteType="email"
                placeholder="E-mail"
                autoCapitalize="none"
                returnKeyType="next"
              />
              <TouchableOpacity onPress={() => {}} style={Styles.btnSend}>
                <Text style={Styles.btnText}>
                  Enviar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
}
export default ForgotPassword;
