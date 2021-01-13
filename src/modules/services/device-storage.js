import AsyncStorage from '@react-native-community/async-storage';

class DeviceStorage {
  async setItem(key, value) {
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, JSON.stringify(value)).catch(_error => {
      console.error('[ERROR] unable to save to local storage.');
    });
  }

  async getItem(key) {
    try {
      return JSON.parse(await AsyncStorage.getItem(key));
    } catch (_error) {
      console.error('[ERROR] unable to load to local storage.');
    }
  }

  async multiRemove(keys) {
    try {
      AsyncStorage.multiRemove(keys);
    } catch (_error) {
      console.error('[ERROR] It was not possible to delete all keys.');
    }
  }
}

export default new DeviceStorage();
