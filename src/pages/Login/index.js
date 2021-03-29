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
import { bindActionCreators } from 'redux';
import { SafeAreaView } from 'react-navigation';
import { useForm, Controller } from 'react-hook-form';
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
import DeviceStorage from '@modules/services/device-storage';

import { changeStatusBar } from '@modules/utils';
import Validator from '@modules/validators/index';

import { setCep } from '@modules/services/delivery';
import { saveLengthCart, favoritesUser } from '@redux/actions';

/* Styles */
import DefaultStyles from '@assets/style/default';
import config from '@/config';
import Styles from './styles';

function Login({ route, navigation, hideGoBack }) {
  const { urls } = config;
  navigation.addListener('focus', () => changeStatusBar('dark-content'));

  const validator = new Validator();
  const inputPaswordRef = createRef();
  const { open: openToast } = useToast();
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
    })
      .then(async () => {
        openToast({
          type: 'success',
          title: 'Acesse sua conta',
          message: 'Login efetuado com sucesso!',
        });

        Promise.all([ApiProfile.getProfile(), ApiShopping.getBasket()]).then(
          response => {
            const profile = response[0].data;
            const { basket } = response[1].data;

            if (basket.postalCode) setCep({ cep: basket.postalCode });
            ApiAuth.saveUser(profile);
          }
        );

        if (route.params) {
          const { to, replace, params } = route.params;
          setTimeout(() => {
            const action = replace ? 'replace' : 'navigate';
            navigation[action](to, params);
          }, 500);
        }
      })
      .catch(({ message }) => {
        setLoading(false);

        openToast({
          message,
          type: 'error',
          title: 'Acesse sua conta',
        });
      });

    ApiProfile.getFavorites().then(({ data }) => {
      DeviceStorage.setItem('@BelshopApp:favorites', data.items);
      this.props.favoritesUser(data.items);
    });
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
                source: { uri: urls.forgot },
              })
            }
          >
            <Text style={Styles.forgot}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            disabled={loading}
            onPress={handleSubmit(onSubmitLogin)}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={Styles.textBtn}>Acessar</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={Styles.containerBottom}>
          <Text style={Styles.title}>Você é nova por aqui?</Text>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() =>
              navigation.navigate('ExternalLink', {
                source: { uri: urls.signup },
              })
            }
          >
            <Text style={Styles.textBtn}>Crie sua conta</Text>
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
  bindActionCreators({ saveLengthCart, favoritesUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
