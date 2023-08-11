import AsyncStorage from '@react-native-async-storage/async-storage';

const saveDataToStorage = async (value: any, key: string) => {
  try {
    // const jsonValue = JSON.stringify(value);
    let jsonValue = value;
    if (typeof value !== 'string') {
      jsonValue = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};
const getDataStorage = async (key: string, isString: boolean) => {
  try {
    let jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null && isString) {
      return jsonValue;
    }
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
const removeDataStorage = async (
  key: string,
  callback?: (error?: Error) => void,
) => {
  try {
    await AsyncStorage.removeItem(key);
    callback && callback();
  } catch (e) {
    callback && callback(e as Error);

    // error reading value
  }
};

export {saveDataToStorage, getDataStorage, removeDataStorage};
