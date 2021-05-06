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
import { EmailRegExp } from '@modules/validators/index';
import { setCep } from '@modules/services/delivery';
import { favoritesUser } from '@redux/actions';

/* Styles */
import DefaultStyles from '@assets/style/default';
import { BLACK, WHITE, GREY } from '@assets/style/colors';
import config from '@/config';
import Styles from './styles';

const Login = (props) => {
  const {
    route,
    navigation,
    hideGoBack,
    favoritesUser: favoritesUserAction,
  } = props;
  const { urls } = config;

  // TODO: move no useEffect
  navigation.addListener('focus', () => changeStatusBar('dark-content'));

  const inputPaswordRef = createRef();
  const { open: openToast } = useToast();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, errors } = useForm();

  const getProfile = async () => {
    const { data } = await ApiProfile.getProfile();
    ApiAuth.saveUser(data);
  };

  const getBasket = async () => {
    const { data } = await ApiShopping.getBasket();
    const { basket } = data;

    if (basket) {
      setCep({ cep: basket.postalCode });
    }
  };

  const getFavorites = async () => {
    const { data } = await ApiProfile.getFavorites();

    DeviceStorage.setItem('@BelshopApp:favorites', data.items);
    favoritesUserAction(data.items);
  };

  const handleLogin = async ({ email, password }) => {
    setLoading(true);

    try {
      await ApiAuth.login({
        username: email,
        password,
      });
    } catch (error) {
      setLoading(false);

      return openToast({
        title: 'Acesse sua conta',
        message: error.message,
        type: 'error',
      });
    }

    try {
      const { favoritedProduct } = route.params;
      if (favoritedProduct) {
        const { id, sku } = favoritedProduct;
        await ApiProfile.addFavorites(id, sku);
      }
      await Promise.all([getProfile(), getBasket(), getFavorites()]);

      const { to, replace, params } = route.params;
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
      console.log(error);
      openToast({
        title: 'Acesse sua conta',
        message:
          'Erro ao tentar pegar as informações do seu usuário, por favor tentar novamente mais tarde. Se o problema persisistir entre em contato com o suporte.',
        type: 'error',
      });

      setLoading(false);
    }

    return null;
  };

  // useEffect(() => {
  //   changeStatusBar('dark-content');
  // }, []);

  return (
    <SafeAreaView style={DefaultStyles.viewGrey}>
      {!hideGoBack && (
        <View style={Styles.containerHeader}>
          <TouchableOpacity
            style={Styles.btnBack}
            onPress={() => navigation.goBack()}
          >
            <ArrowVIcon color={BLACK} />
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
              defaultValue=""
              control={control}
              rules={{
                required: 'Campo e-mail deve ser preenchido.',
                pattern: {
                  value: EmailRegExp,
                  message: 'E-mail inválido.',
                },
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
                  errorText={errors?.email?.message}
                  textContentType="emailAddress"
                  style={[
                    Styles.input,
                    { backgroundColor: loading ? GREY : WHITE },
                  ]}
                  onSubmitEditing={() => inputPaswordRef.current.ref.focus()}
                />
              )}
            />
          </View>
          <View style={Styles.inputWrapper}>
            <Controller
              name="password"
              defaultValue=""
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
                  errorText={errors?.password?.message}
                  style={[
                    Styles.input,
                    { backgroundColor: loading ? GREY : WHITE },
                  ]}
                  onSubmitEditing={handleSubmit(handleLogin)}
                />
              )}
            />
          </View>
          <TouchableOpacity
            style={Styles.wrapperForgot}
            onPress={() => navigation.navigate('ExternalLink', {
              source: { uri: urls.forgot },
            })
            }
          >
            <Text style={Styles.forgot}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            disabled={loading}
            onPress={handleSubmit(handleLogin)}
          >
            {loading ? (
              <ActivityIndicator size="small" color={WHITE} />
            ) : (
              <Text style={Styles.textBtn}>Acessar</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={Styles.containerBottom}>
          <Text style={Styles.title}>Você é nova por aqui?</Text>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => navigation.navigate('ExternalLink', {
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
};

Login.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  hideGoBack: PropTypes.bool,
};

Login.defaultProps = {
  route: { params: false },
  hideGoBack: false,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    favoritesUser,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Login);
