import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "@/api/backend";
import {
  AuthContextProps,
  AuthProviderProps,
  RegisteResult,
  RegisterProps,
  SignInProps,
  SignResult,
} from "./types";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const FREE_ACCESS_PATHNAMES = ["login", "register"];

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("");
  const [allClassrooms, setAllClassrooms] = useState([]);
  const navigation = useNavigation();
  // useEffect(() => {
  //   async function fetchUser(token: string) {
  //     try {
  //       const { data } = await api.get(`authentication/${token}`);
  //       const { userId, userType } = data;
  //       setUserId(userId);
  //       setUserType(userType);
  //     } catch (error) {
  //       console.error("Failed to get User data:", error);
  //       delete api.defaults.headers.common["Authorization"];
  //       setIsLoggedIn(false);
  //     }
  //   }

  //   async function checkAuth() {
  //     const accessFree = FREE_ACCESS_PATHNAMES.includes(route.name);
  //     if (!accessFree) {
  //       const token = await AsyncStorage.getItem("DynaPost.Token");
  //       if (!token) {
  //         delete api.defaults.headers.common["Authorization"];
  //         setIsLoggedIn(false);
  //       } else if (userId.trim() === "") {
  //         fetchUser(token);
  //       }
  //     }
  //   }

  //   checkAuth();
  // }, [route.name, navigation, userId]);

  async function getAllClassrooms() {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("classrooms");
      setAllClassrooms(data);
    } catch (error) {
      setError("Erro ao carregar as turmas.");
      console.error("Failed to get classrooms", error);
    } finally {
      setLoading(false);
    }
  }

  async function register({
    name,
    email,
    password,
    classrooms,
    userType,
  }: RegisterProps) {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.post("register", {
        name,
        email,
        password,
        classrooms,
        userType
      });
      const { error, message } = data;

      if (error) {
        Alert.alert(message);
        return;
      }
      Alert.alert("Conta criada");
    } catch (error) {
      console.error("Register Failed:", error);
      setError("Alguma coisa deu errado");
    } finally {
      setLoading(false);
    }
  }

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("signin", { email, password });
      const { error, userId, userType, token, message } = response.data;

      if (error) {
        Alert.alert(message);
        return;
      }

      if(token && userType && userId) {
        await AsyncStorage.setItem("DynaPost.Token", token);
        setUserId(userId);
        setUserType(userType);
        setIsLoggedIn(true);
      }

    } catch (error) {
      console.log("Error :", error);
      Alert.alert("Ocorreu um erro ao tentar autenticar a aplicação");
    }
  }

  async function logOut() {
    await AsyncStorage.removeItem("DynaPost.Token");
    delete api.defaults.headers.common["Authorization"];
    setUserId("");
    setUserType("");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    getAllClassrooms();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        signIn,
        logOut,
        isLoggedIn,
        userId,
        userType,
        loading,
        error,
        allClassrooms,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
