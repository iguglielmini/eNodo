import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { bindActionCreators } from 'redux';
import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

/* Components */
import Input from '@components/atoms/Input';
import { useToast } from '@components/molecules/Toast';

/* Images */
import ArrowVIcon from '@assets/svg/arrowv';

// Storage, Utils e API

import ApiAuth from '@modules/api/api-auth';
import ApiProfile from '@modules/api/api-profile';
import ApiShopping from '@modules/api/api-shopping';

import { changeStatusBar } from '@modules/utils';
import Validator from '@modules/validators/index';

import { saveLengthCart } from '@redux/actions';
import { setCep } from '@modules/services/delivery';

/* Styles */
import DefaultStyles from '@assets/style/default';
import { urls } from '@/config';
import Styles from './styles';

function Login({ route, navigation, hideGoBack }) {
  const { to, replace, params } = route.params;
  navigation.addListener('focus', () => changeStatusBar('dark-content'));

  const validator = new Validator();
  const inputPaswordRef = createRef();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, errors, setError } = useForm();

  function getErrors(error) {
    if (errors && errors[error]) return errors[error].message;
  }

  async function onSubmitLogin({ email, password }) {
    const isValidEmail = validator.isValidEmail(email);
    if (!isValidEmail) setError('email', { message: 'E-mail inválido.' });

    setLoading(true);

    await ApiAuth.login({
      password,
      username: email,
    }).catch(error => {
      setLoading(false);

      return openToast({
        type: 'error',
        message: error.message,
        title: 'Acesse sua conta',
      });
    });

    try {
      const { data } = await ApiProfile.getProfile();
      await ApiAuth.saveUser(data);

      const { data: cartData } = await ApiShopping.getBasket();
      await setCep({ cep: cartData.postalCode });

      if (to) {
        setTimeout(() => {
          const action = replace ? 'replace' : 'navigate';
          navigation[action](to, params);
        }, 500);
      }

      openToast({
        title: 'Acesse sua conta',
        message: 'Login efetuado com sucesso!',
        type: 'success',
      });
    } catch (error) {
      openToast({
        title: 'Acesse sua conta',
        message:
          'Erro ao tentar pegar as informações do seu usuário, por favor tentar novamente mais tarde. Se o problema persisistir entre em contato com o suporte.',
        type: 'error',
      });

      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={DefaultStyles.viewGrey}>
      {!hideGoBack && (
        <View style={Styles.containerHeader}>
          <TouchableOpacity
            style={Styles.btnBack}
            onPress={() => navigation.goBack()}
          >
            <ArrowVIcon color="#000" />
          </TouchableOpacity>
          <LinearGradient
            end={{ x: 0, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={Styles.gradientTop}
            colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
          />
        </View>
      )}
      <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
        <View style={Styles.container}>
          <Text style={Styles.title}>Acesse sua conta</Text>
          <View style={Styles.inputWrapper}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Campo e-mail deve ser preenchido.',
              }}
              render={({ onBlur, onChange, value }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  editable={!loading}
                  returnKeyType="next"
                  placeholder="E-mail"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  autoCompleteType="email"
                  onErrorText={getErrors('email')}
                  textContentType="emailAddress"
                  style={[
                    Styles.input,
                    { backgroundColor: loading ? '#e6e6e6' : '#fff' },
                  ]}
                  onSubmitEditing={() => inputPaswordRef.current.ref.focus()}
                />
              )}
            />
          </View>
          <View style={Styles.inputWrapper}>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Campo senha deve ser preenchido.',
              }}
              render={({ onBlur, onChange, value }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  secureTextEntry
                  placeholder="Senha"
                  editable={!loading}
                  ref={inputPaswordRef}
                  onChangeText={onChange}
                  textContentType="password"
                  onErrorText={getErrors('password')}
                  style={[
                    Styles.input,
                    { backgroundColor: loading ? '#e6e6e6' : '#fff' },
                  ]}
                />
              )}
            />
          </View>
          <TouchableOpacity
            style={Styles.wrapperForgot}
            onPress={() =>
              navigation.navigate('ExternalLink', {
                source: { url: urls.forgot },
              })
            }
          >
            <Text style={Styles.forgot}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={handleSubmit(onSubmitLogin)}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={Styles.textBtnLogin}>Acessar</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={Styles.containerBottom}>
          <Text style={Styles.title}>Você é nova por aqui?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ExternalLink', {
                source: { url: urls.signup },
              })
            }
          >
            <Text style={Styles.btn}>Crie sua conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

Login.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  hideGoBack: PropTypes.bool,
};

Login.defaultProps = {
  route: { params: false },
  hideGoBack: false,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ saveLengthCart }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
