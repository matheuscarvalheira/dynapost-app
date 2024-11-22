import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NEXT_PUBLIC_BACKEND_URL } from '@env';

function getApiClient(): AxiosInstance {
  const api = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_URL,
  });

  async function setAuthToken() {
    const token = await AsyncStorage.getItem('DynaPost.Token');
    if (token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  setAuthToken();

  return api;
}

export const api = getApiClient();