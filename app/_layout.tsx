import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../styles/theme";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import TabNavigator from "./navigation/TabNavigator";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import PostDetailsScreen from "./screens/PostDetails";
import { MenuProvider } from "react-native-popup-menu";

const Stack = createStackNavigator();

export default function CheckLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Carregando as fontes
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

    useEffect(() => {
  	const checkLoginStatus = async () => {
  	  const loggedIn = await fakeAuthCheck();
  	  setIsLoggedIn(loggedIn as boolean);
  	};

  	checkLoginStatus();
    }, []);

  const fakeAuthCheck = async () => {
    // Simula uma verificação de aut
    return new Promise((resolve) => setTimeout(() => resolve(false), 1000));
  };

  // Enquanto as fontes não estão carregadas, exibe uma tela de carregamento
  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={TabNavigator}
            />
          ) : (
            // <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={TabNavigator}
          />
            
          )}
        </Stack.Navigator>
      </MenuProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
