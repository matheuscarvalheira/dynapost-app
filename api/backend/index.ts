import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL;

function getApiClient(): AxiosInstance {
  const api = axios.create({
    baseURL: backendUrl,
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