import AsyncStorage from "@react-native-community/async-storage";

class DeviceStorage {
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

  async multiRemove(keys) {
    try {
      AsyncStorage.multiRemove(keys);
    } catch(error) {
      console.error("[ERROR] It was not possible to delete all keys.");
    }
  }
}

export default new DeviceStorage();
