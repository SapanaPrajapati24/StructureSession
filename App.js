
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {  View } from "react-native";
import RootNavigator from "./src/router/RootNavigator";


const Stack = createNativeStackNavigator();

const App = () => {

  return (
   <View>
    <RootNavigator />
   </View>
  )
}
export default App;