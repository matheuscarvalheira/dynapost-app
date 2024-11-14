import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../styles/theme';
import { useFonts, Poppins_400Regular, Poppins_300Light, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Inter_300Light, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

export default function RootLayout() {
  // Carregando as fontes
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  // Enquanto as fontes não estão carregadas, exibe uma tela de carregamento
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}