// import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorage } from 'react-native';

class DeviceStorage {
  async getTotalCart() {
    const { items } = JSON.parse(await AsyncStorage.getItem("@CART"));
    return items.length;
  }

  setItem(key, value) {
    AsyncStorage.setItem(key, JSON.stringify(value)).catch((_error) => {
      console.error("[ERROR] unable to save to local storage.");
    });
  }

  async getItem(key) {
    try {
      return JSON.parse(await AsyncStorage.getItem(key));
    } catch (error) {
      console.error("[ERROR] unable to load to local storage.");
    }
  }
}

export default new DeviceStorage();
