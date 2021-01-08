import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import config from "@/config";

export default class Api {
  constructor() {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    this.setHost();
    this.constructor.setAuthIntercept();
  }

  static async setAuthIntercept() {
    axios.interceptors.response.use(undefined, async (error) => {
      if (
        error.response.status === 401 &&
        error.response.data.message !== "PASSWORD_MISMATCH" && // exclude login request
        error.response.data.message !== "USER_NOT_FOUND" // exclude login request
      )
        return this.logout();

      return Promise.reject(error);
    });
  }

  setHost() {
    axios.defaults.baseURL = config.baseURL;
    axios.defaults.headers.common["x-api-key"] = config.apiKey;
  }

  async getToken() {
    const token = await AsyncStorage.getItem("@BelshopApp:token");

    if (token) {
      await this.setToken(token);
      return token;
    }

    return false;
  }

  async logout() {
    await AsyncStorage.multiRemove(["@BelshopApp:token"]);
    await this.setToken(undefined);
    return true;
  }

  async setToken(token) {
    axios.defaults.headers.common.Authorization = token
      ? `Bearer ${token}`
      : undefined;
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
