import React, {
  useState, useEffect
} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
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
import DeviceStorage from '@modules/services/device-storage';

import { changeStatusBar } from '@modules/utils';
import Validator from '@modules/validators/index';

/* Styles */
import DefaultStyles from '@assets/style/default';
import config from '@/config';
import Styles from './styles';

const Login = ({ route, navigation, hideGoBack }) => {
  const { to, replace, params } = route.params;
  const [textMail, setTextMail] = useState('');
  const [textPass, setTextPass] = useState('');
  const [inputRef, setInputRef] = useState(null);
  const [loading, setLoading] = useState(false);

  const validator = new Validator();
  const { open: openToast } = useToast();

  const handleNextInput = () => {
    inputRef.focus();
  };

  const handleLogin = async () => {
    const err = [];
    const isValid = validator.isValidEmail(textMail);

    if (textMail === '') err.push('- Campo e-mail deve ser preenchido.');
    else if (!isValid) err.push('- E-mail inválido.');
    if (textPass === '') err.push('- Campo senha deve ser preenchido.');

    if (err.length > 0) {
      return openToast({
        title: 'Acesse sua conta',
        message: err.join('\n'),
        type: 'error',
      });
    }

    setLoading(true);

    try {
      await ApiAuth.login({
        username: textMail,
        password: textPass
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
      const resp = await ApiProfile.getProfile();

      const { data: dataProfile } = resp;
      const { addresses } = dataProfile;
      const cep = addresses.length > 0 ? addresses[0].postalCode : false;
      const delivery = await DeviceStorage.getItem('@BelshopApp:delivery');

      if (cep && (!delivery || !delivery.postalCode)) {
        await DeviceStorage.setItem('@BelshopApp:delivery', {
          postalCode: cep
        });
      }

      await ApiAuth.saveUser(dataProfile);

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
        message: 'Erro ao tentar pegar as informações do seu usuário, por favor tentar novamente mais tarde. Se o problema persisistir entre em contato com o suporte.',
        type: 'error',
      });

      setLoading(false);
    }

    return null;
  };

  useEffect(() => {
    changeStatusBar('dark-content');
  }, []);

  return (
    <SafeAreaView style={DefaultStyles.viewGrey}>
      {!hideGoBack && (
      <View style={Styles.containerHeader}>
        <TouchableOpacity style={Styles.btnBack} onPress={() => { navigation.goBack(); }}>
          <ArrowVIcon color="#000" />
        </TouchableOpacity>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={Styles.gradientTop}
          colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
        />
      </View>
      )}
      <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
        <View style={Styles.container}>
          <Text style={Styles.title}>Acesse sua conta</Text>
          <View style={Styles.inputWrapper}>
            <Input
              textContentType="emailAddress"
              autoCompleteType="email"
              placeholder="E-mail"
              value={textMail}
              style={[Styles.input, { backgroundColor: loading ? '#e6e6e6' : '#fff' }]}
              onChangeText={setTextMail}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => handleNextInput()}
              editable={!loading}
            />
          </View>
          <View style={Styles.inputWrapper}>
            <Input
              onRef={r => setInputRef(r)}
              textContentType="password"
              secureTextEntry
              placeholder="Senha"
              value={textPass}
              onChangeText={setTextPass}
              style={[Styles.input, { backgroundColor: loading ? '#e6e6e6' : '#fff' }]}
              editable={!loading}
            />
          </View>
          <TouchableOpacity
            style={Styles.wrapperForgot}
            onPress={() => { navigation.navigate('ExternalLink', { source: { url: config.urls.forgot } }); }}
          >
            <Text style={Styles.forgot}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator style={Styles.btnLoading} size="small" color="#ffffff" />
            ) : (
              <Text style={Styles.btn}>Acessar</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={Styles.containerBottom}>
          <Text style={Styles.title}>Você é nova por aqui?</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('ExternalLink', { source: { url: config.urls.signup } }); }}>
            <Text style={Styles.btn}>Crie sua conta</Text>
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
  hideGoBack: false
};

export default Login;
