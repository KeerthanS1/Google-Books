import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToLocalData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Please enable permission');
  }
};

export const removeValueFromLocal = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('Please enable permission');
  }
};

export const getDataFromLocal = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(value);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('Please enable permission');
  }
};
