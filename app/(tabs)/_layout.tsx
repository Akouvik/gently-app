import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Signup from '../Components/Signup';
import ForgotPassword from '../Components/ForgotPassword';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'aperture-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: 'signup',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'checkmark-circle-outline'}
              color={color}
            />
          ),
        }}
      />
        <Tabs.Screen
        name="MainPage"
        options={{
          title: 'MainPage',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'albums-outline'}
              color={color}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="Community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'body-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="forgotpassword"
        options={{
          title: 'forgotpassword',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'bag-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
