import React, { useEffect } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import Color from '/Users/macos7/Documents/Assignments/re_assignmen2/src/utils/color'
import {style} from './style'

const Home = ({ route }) => {
    const { name, email,phoneNumber,password } = route.params;

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    return (
        <View>
            <Text style={style.shadowContainerStyle}>
                Name is{name}
            </Text>
            <Text style={style.shadowContainerStyle}>
                Email is {email}    
            </Text>
            <Text style={style.shadowContainerStyle}>
                PhoneNumber is {phoneNumber}
            </Text>
            <Text style={style.shadowContainerStyle}>
                password is{password}
            </Text>
        </View>
    )
}

export default Home;