import axios from 'axios';
import DeviceStorage from '@modules/services/device-storage';
import {
  saveUser,
  clearUser,
  saveLengthCart,
  favoritesUser,
} from '@redux/actions';
import config from '@/config';
import APIRturn from './utils/return';

import store from '@redux';

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
      ...user,
    });
  }

  async clearUser(expired) {
    store.dispatch(clearUser(expired));
    store.dispatch(saveLengthCart(0));
    store.dispatch(favoritesUser(null));

    await DeviceStorage.multiRemove([
      '@BelshopApp:user',
      '@BelshopApp:favorites',
    ]);
    return true;
  }

  async setToken(token) {
    await DeviceStorage.setItem('@BelshopApp:token', token);
    this.setAuthorizationHeader(token);
  }

  setAuthorizationHeader(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async get(url, options) {
    return axios.get(url, options);
  }

  async put(url, data, options) {
    return axios.put(url, data, options);
  }

  async post(url, data, options) {
    return axios.post(url, data, options);
  }

  async delete(url, data, options) {
    return axios.request({
      method: 'DELETE', url, data, ...options
    });
  }

  async patch(url, data, options) {
    return axios.patch(url, data, options);
  }
}
