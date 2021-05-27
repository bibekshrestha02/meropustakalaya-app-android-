import axios from 'axios';
import { Url } from './GlobalVariables';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiInstance = axios.create({
  baseURL: `${Url}api/v1/`,
  timeout: 20000,
});

apiInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers = {
        'x-auth-token': token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
