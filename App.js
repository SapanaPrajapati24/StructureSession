import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import About from "./Components/About";
import Home from "./Components/Home";
import Main from "./Components/Main";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button, Text, TouchableOpacity, View } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />

        <Stack.Screen name="signUp" component={SignUp}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={25} color="#ff5967" />
              </TouchableOpacity>
            ), title: ''
          })}
        />

        <Stack.Screen name="signIn" component={SignIn}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;