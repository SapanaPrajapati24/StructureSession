import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/SignIn"
import About from "../Screens/About";
import Home from "../Screens/Home";
import Main from "../Screens/Main"
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button, Text, TouchableOpacity, View } from "react-native";
import Welcome from "../Screens/Welcome";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />

        <Stack.Screen name="signUp" component={SignUp}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('main')}>
                <AntDesign name="left" size={25} color="#ff5967" />
              </TouchableOpacity>
            ), title: ''
          })}
        />

        <Stack.Screen name="signIn" component={SignIn}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('main')}>
                <AntDesign name="left" size={25} color="#ff5967" />
              </TouchableOpacity>
            ), title: ''
          })} />

        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Home" component={Home}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.push('signUp')}>
                <AntDesign name="left" size={25} color="#ff5967" />
              </TouchableOpacity>
            ), title: ''
          })}
        />

        <Stack.Screen name="welcome" component={Welcome}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.push('signIn')}>
                <AntDesign name="left" size={25} color="#ff5967" />
              </TouchableOpacity>
            ), title: ''
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default RootNavigator;