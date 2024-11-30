import React from "react";
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
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";

export default function CheckLogin() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const route = useRouter();

  // Carregando as fontes
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const loggedIn = await fakeAuthCheck();
  //     setIsLoggedIn(loggedIn as boolean);
  //   };

  //   checkLoginStatus();
  // }, []);

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

  const App: React.FC = () => {
    return <CheckLogin />;
  };

  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Stack screenOptions={{ headerShown: false }} />
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
