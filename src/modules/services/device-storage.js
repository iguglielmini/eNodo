import AsyncStorage from '@react-native-community/async-storage';

class DeviceStorage {
  async setItem(key, value) {
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, JSON.stringify(value)).catch(() => {
      // eslint-disable-next-line no-console
      console.error('[ERROR] unable to save to local storage.');
    });
  }

  async getItem(key) {
    return JSON.parse(await AsyncStorage.getItem(key));
  }

  async removeItem(key) {
    return AsyncStorage.removeItem(key);
  }

  async multiRemove(keys) {
    try {
      AsyncStorage.multiRemove(keys);
    } catch (_error) {
      // eslint-disable-next-line no-console
      console.error('[ERROR] It was not possible to delete all keys.');
    }
  }
}

export default new DeviceStorage();
