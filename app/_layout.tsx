import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Platform } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // Add more fonts here if needed
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Create custom theme with consistent header styling
  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.dark.background,
      card: Colors.dark.cardBackground,
      text: Colors.dark.text,
      primary: Colors.dark.tint,
      border: Colors.dark.border,
      notification: Colors.dark.error,
    },
  };

  const customLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.background,
      card: Colors.light.cardBackground,
      text: Colors.light.text,
      primary: Colors.light.tint,
      border: Colors.light.border,
      notification: Colors.light.error,
    },
  };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? customDarkTheme : customLightTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? Colors.dark.cardBackground : Colors.light.cardBackground,
          },
          headerTintColor: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text,
          headerShadowVisible: false,
          headerBackTitle: ' ',
          ...(Platform.OS === 'web' && {
            headerTitleAlign: 'center',
          }),
          contentStyle: {
            backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background,
          },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: false,
            title: 'Antonio Archer - Portfolio'
          }} 
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
