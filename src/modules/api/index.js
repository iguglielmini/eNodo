import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import config from '@/config';

import NavigatorService from '../navigator';

export default class Api {
  constructor() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    this.setHost();
    this.constructor.setAuthIntercept();
  }

  static async setAuthIntercept() {
    axios.interceptors.response.use(undefined, async (error) => {
      if (
        error.response.status === 401
        && error.response.data.message !== 'PASSWORD_MISMATCH' // exclude login request
        && error.response.data.message !== 'USER_NOT_FOUND' // exclude login request
      ) return this.logout();

      return Promise.reject(error);
    });
  }

  setHost() {
    this.baseURL = config.baseURL;
  }

  async getToken() {
    const token = await AsyncStorage.getItem('@BelshopApp:token');

    if (token) {
      await this.setToken(token);
      return token;
    }

    return false;
  }

  async logout() {
    // TODO
    // const token = await AsyncStorage.getItem('@BelshopApp:token');
    // this.post('/auth/logout', { ACCESS_TOKEN: token });
    await AsyncStorage.multiRemove([
      '@BelshopApp:gift',
      '@BelshopApp:token',
      '@BelshopApp:campaign-lead',
      '@BelshopApp:invite-url',
      '@BelshopApp:campaign-code'
    ]);
    await this.setToken(undefined);
    NavigatorService.navigate('WelcomeFlow');
    return true;
  }

  setToken(token) {
    this.token = token;
    if (this.token) {
      axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    } else {
      axios.defaults.headers.common.Authorization = undefined;
    }
  }

  async get(path, options) {
    return axios.get(this.baseURL + path, options);
  }

  async put(path, data, options) {
    return axios.put(this.baseURL + path, data, options);
  }

  async post(path, data, options) {
    return axios.post(this.baseURL + path, data, options);
  }

  async delete(path, options) {
    return axios.delete(this.baseURL + path, options);
  }

  async patch(path, data, options) {
    return axios.patch(this.baseURL + path, data, options);
  }
}
