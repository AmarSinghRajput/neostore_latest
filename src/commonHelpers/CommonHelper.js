import AsyncStorage from '@react-native-community/async-storage';
const CommonMethods = {
  CheckEmptyString: (text) => {
    return text != undefined && text != '';
  },
  CheckEmailValid: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  CheckStringEqual: (text1, text2) => {
    return text1 == text2;
  },
  SaveData: async (key, data, callback) => {
    try {
      await AsyncStorage.setItem(key, data, (error) => {
        if (error == undefined) {
          callback(true);
        }
      });
    } catch (error) {
      console.error(JSON.stringify(error));
      callback(error);
    }
  },
  MultiSet: async (items, callback) => {
    try {
      await AsyncStorage.multiSet(items, () => {
        if (error == undefined) {
          callback(true);
        }
      });
    } catch (error) {
      console.error(JSON.stringify(error));
      callback(error);
    }
  },
  DeleteAllStorage: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  },
  GetLocalItem: async (key, callback) => {
    try {
      await AsyncStorage.getItem(key, (error, value) => {
        callback(error == undefined || error == null ? value : error);
      });
    } catch (error) {
      callback(error);
    }
  },
  DeleteLocalByKey: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  },
  CheckLoginStatus: () => {},
};
export default CommonMethods;
