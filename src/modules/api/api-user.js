import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';
import FormData from 'form-data';
import Api from '.';
import Store from '../../redux-store';
import APIErrorHandler from './api-error-handler';
import APINormalizerResponse from './api-normalizer-response';
import { saveUser, editUser } from '../../redux-store/actions/user';

export default class userService extends Api {
  async register(data) {
    return this.post('/auth/signup', data)
      .then(async (response) => {
        if (response.status === 201) {
          const { access_token: accessToken } = response.data;
          await this.manageToken(accessToken);

          return this.save();
        }

        return false;
      })
      .catch((err) => {
        const response = {
          data: false,
          status: err.response.status,
        };

        response.data = APIErrorHandler.getErrorMessages(err.response);

        return response.data && response;
      });
  }

  async getInfo() {
    this.user = await Store.getState();
    return this.user;
  }

  async requestSMS(data) {
    return this.post('/customer/request-sms-code', data)
      .then(async response => APINormalizerResponse.getMessageByStatus(response.status).requestSMS)
      .catch((err) => {
        const response = {
          data: false,
          status: err.response.status,
        };

        response.data = APIErrorHandler.getErrorMessages(err.response);

        return response.data && response;
      });
  }

  async login(data) {
    return this.post('/auth/signin', data)
      .then(async (response) => {
        if (response.status === 201) {
          const { access_token: accessToken } = response.data;
          await this.manageToken(accessToken);
          return this.save();
        }

        return false;
      })
      .catch((err) => {
        const response = {
          data: false,
          status: err.response.status,
        };

        response.data = APIErrorHandler.getErrorMessages(err.response);

        return response.data && response;
      });
  }

  async validateCode(data) {
    return this.post('/customer/validate-code', data)
      .then(() => ({ success: true }))
      .catch(err => ({
        data: APIErrorHandler.getErrorMessages(err.response)
      }));
  }

  async save() {
    return this.get('/customer/me').then(async (response) => {
      if (response.status === 200) {
        const { data } = response;

        const getCreditCard = this.get('/creditcard');
        const getNotificationsCounter = this.get('/notification/news');

        return Promise.all([getCreditCard, getNotificationsCounter]).then(async (res) => {
          if (res[0].status === 200 && res[1].status === 200) {
            data.cards = res[0].data;
            data.notificationsCounter = res[1].data.total;
            await Store.dispatch(saveUser(data));
            return { success: true };
          }

          return false;
        });
      }

      return false;
    }, () => false);
  }

  async edit(data) {
    return this.put('/customer/me', data)
      .then(async (response) => {
        if (response.status === 200 || response.status === 201) {
          const { data: userData } = response;
          const { birthday } = Store.getState().user;
          if (birthday !== data.birthday) userData.birthdayChanges = true;
          await Store.dispatch(editUser(userData));
          return APINormalizerResponse.getMessageByStatus(response.status).editProfile;
        }

        return false;
      })
      .catch((err) => {
        const response = {
          data: false,
          status: err.response.status,
        };

        response.data = APIErrorHandler.getErrorMessages(err.response);

        return response.data && response;
      });
  }

  async manageToken(token) {
    await AsyncStorage.setItem('@BelshopApp:token', token);
    this.setToken(token);
    return true;
  }

  async uploadAvatar(avatarData, onProgress) {
    const data = new FormData();

    const { type } = avatarData;
    const uri = Platform.OS === 'android' ? avatarData.uri : avatarData.uri.replace('file://', '');

    let name = avatarData.fileName;
    if (name === undefined) {
      const uriSplit = uri.split('/');
      name = uriSplit[uriSplit.length - 1];
    }

    data.append('data', { name, type, uri });

    return this.post('/storage/upload/image', data, { onUploadProgress: progress => onProgress(progress) })
      .then((res) => {
        if (res.status === 201) return { success: true, data: res.data.id };
        return false;
      }, err => APIErrorHandler.getErrorMessages(err.response));
  }

  async forgotPassword(mail) {
    const data = { mail };
    return this.post('/customer/forgot-password', data).then(response => response.data, (error) => {
      const message = APIErrorHandler.getErrorMessages(error.response).messages.join('\n');
      throw new Error(message);
    });
  }
}
