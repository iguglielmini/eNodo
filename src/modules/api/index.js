import axios from 'axios';
import DeviceStorage from '@modules/services/device-storage';
import config from '@/config';
import APIRturn from './utils/return';

import store from '../../redux-store';
import { saveUser, clearUser, saveLengthCart } from '../../redux-store/actions';

export default class Api {
  constructor() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.common['x-api-key'] = config.apiKey;

    this.setHost();
    this.setAuthIntercept();
  }

  async setAuthIntercept() {
    axios.interceptors.response.use(undefined, async (error) => {
      if (error.response.status === 401 && error.response.data.message) {
        const unauthorized = error.response.data.message.find(
          message => message.constraints && message.constraints.UNAUTHORIZED
        );

        if (!unauthorized) {
          try {
            await this.logout();
          } catch (e) {
            return Promise.reject(e);
          }

          return false;
        }
      }

      return Promise.reject(error);
    });
  }

  async setHost() {
    axios.defaults.baseURL = config.baseURL;
  }

  async login(params) {
    const response = await APIRturn(this.post('/auth/login', params));
    const { data } = response;

    if (data.token) {
      await this.setToken(data.token);
    }

    return response;
  }

  async logout() {
    const response = await APIRturn(this.post('/auth/logout'));
    const { data } = response;

    if (data.token) {
      await this.setToken(data.token);
    }

    return response;
  }

  async recovery(params) {
    return APIRturn(this.post('/auth/recover', params));
  }

  async session() {
    const currentToken = await this.getToken();
    this.setAuthorizationHeader(currentToken);

    try {
      const { data, token } = (await APIRturn(this.get('/auth/session'))).data;
      await this.setToken(token);

      if (!data || !data.customerId || data.expired) {
        await this.clearUser(true);
      }

      return { data, token };
    } catch (error) {
      await this.clearUser();
      return null;
    }
  }

  async getToken() {
    return DeviceStorage.getItem('@BelshopApp:token');
  }

  async saveUser(user) {
    store.dispatch(saveUser(user));

    await DeviceStorage.setItem('@BelshopApp:user', {
      ...user
    });
  }

  async clearUser(expired) {
    store.dispatch(clearUser(expired));
    store.dispatch(saveLengthCart(0));

    await DeviceStorage.multiRemove(['@BelshopApp:user']);
    return true;
  }

  async setToken(token) {
    await DeviceStorage.setItem('@BelshopApp:token', token);
    this.setAuthorizationHeader(token);
  }

  setAuthorizationHeader(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async get(path, options) {
    return axios.get(path, options);
  }

  async put(path, data, options) {
    return axios.put(path, data, options);
  }

  async post(path, data, options) {
    return axios.post(path, data, options);
  }

  async delete(path, options) {
    return axios.delete(path, options);
  }

  async patch(path, data, options) {
    return axios.patch(path, data, options);
  }
}
