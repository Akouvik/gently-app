// import {
//   DarkTheme,
//   DefaultTheme,
//   NavigationContainer,
//   ThemeProvider,
// } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';
// import HomeScreen from './(tabs)/index'; // Adjust the path if necessary
// import SignupScreen from './Components/Signup'; // Adjust the path if necessary

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// const Stack = createStackNavigator();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <NavigationContainer
//         theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
//       >
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen name="Signup" component={SignupScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </ThemeProvider>
//   );
// }
