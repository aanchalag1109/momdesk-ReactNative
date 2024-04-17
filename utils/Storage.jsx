import AsyncStorage from '@react-native-async-storage/async-storage';
class Storage {
  static async saveToken(data) {
    try {
      await AsyncStorage.setItem('login_dat', data);
      return data;
    } catch (error) {
      return false;
    }
  }

  static async clearToken() {
    let item = {};
    try {
      item = await AsyncStorage.removeItem('login_dat');
      const userProfile = item;
      return userProfile;
    } catch (error) {
      console.warn(error.message);
      return null;
    }
  }

  static async getToken() {
    try {
      let item = await AsyncStorage.getItem('login_dat');

      return item;
    } catch (error) {
      return null;
    }
  }
}
export default Storage;
