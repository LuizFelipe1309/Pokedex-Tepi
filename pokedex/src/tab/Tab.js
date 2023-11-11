import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather'

import Lista from '../list/Lista'
import Unico from '../one/Unico'

export default function tab() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#ff0000',
          borderTopWidth: 0
        }
      }}>
        <Tab.Screen name='lista' component={Lista} options={{
            tabBarIcon:({color,size}) => {
              return <Feather name='list' size={size} color={color}/>
            }}}/>
        <Tab.Screen name='setas' component={Unico} options={{
            tabBarIcon:({color,size}) => {
              return <Feather name='code' size={size} color={color}/>
            }}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}