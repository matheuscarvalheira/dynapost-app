import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '@/api/backend'; 
import { AuthContextProps, AuthProviderProps, RegisteResult, RegisterProps, SignInProps, SignResult } from './types';
import { useNavigation, useRoute } from '@react-navigation/native';

const FREE_ACCESS_PATHNAMES = ['login', 'register'];

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigation = useNavigation();
  const route = useRoute();

  const [userId, setUserId] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    async function fetchUser(token: string) {
      try {
        const { data } = await api.get(`authentication/${token}`);
        const { userId, userType } = data;
        setUserId(userId);
        setUserType(userType);
      } catch (error) {
        console.error('Failed to get User data:', error);
        delete api.defaults.headers.common['Authorization'];
        navigation.navigate('Login' as never);
      }
    }

    async function checkAuth() {
      const accessFree = FREE_ACCESS_PATHNAMES.includes(route.name);
      if (!accessFree) {
        const token = await AsyncStorage.getItem('DynaPost.Token');
        if (!token) {
          delete api.defaults.headers.common['Authorization'];
          navigation.navigate('Login' as never);
        } else if (userId.trim() === '') {
          fetchUser(token);
        }
      }
    }

    checkAuth();
  }, [route.name, navigation, userId]);

  async function register({ name, email, password, classrooms, userType }: RegisterProps): Promise<RegisteResult> {
    try {
      const response = await api.post('register', { name, email, password, classrooms, userType });
      const { error, message } = response.data;

      if (error) {
        console.error('Register Failed:', message);
        return { registerOk: false, message };
      }
      return { registerOk: true, message };
    } catch (error) {
      console.error('Register Failed:', error);
      return { registerOk: false, message: 'Falha realizar o Cadastro. Tente novamente mais tarde.' };
    }
  }

  async function signIn({ email, password }: SignInProps): Promise<SignResult> {
    try {
      const response = await api.post('signin', { email, password });
      const { error, userId, userType, token } = response.data;

      if (error) {
        console.error('SignIn Failed: Invalid Username or Password');
        return { signInOk: false, message: 'Usuário ou Senha Inválidos' };
      }

      setUserId(userId);
      setUserType(userType);

      await AsyncStorage.setItem('DynaPost.Token', token);
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      return { signInOk: true, message: 'Login realizado com Sucesso!' };
    } catch (error) {
      console.error('SignIn Failed:', error);
      return { signInOk: false, message: 'Usuário ou Senha Inválidos' };
    }
  }

  async function logOut() {
    await AsyncStorage.removeItem('DynaPost.Token');
    delete api.defaults.headers.common['Authorization'];
    navigation.navigate('Login' as never);
  }

  return (
    <AuthContext.Provider value={{ register, signIn, logOut, userId, userType }}>
      {children}
    </AuthContext.Provider>
  );
}