/** @format */

import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen.tsx';
import CartScreen from './CartScreen.tsx';
import MeScreen from './MeScreen.tsx';
import { useNavigation } from '@react-navigation/native';


const BottomTab = createBottomTabNavigator<any>();
const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={'Home'}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
    </BottomTab.Navigator>
  );
};

const RootStack = createNativeStackNavigator<any>();
const RootStackNavigator: React.FC = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    console.log('click: go back')
    navigation.goBack()
  }
  const headerLeft = () => (
    <Text onPress={handleGoBack}>go back</Text>
  )

  return (
    <RootStack.Navigator
      initialRouteName={'BottomTab'}
    >
      <RootStack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Me"
        component={MeScreen}
        options={{
          headerLeft: headerLeft,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
