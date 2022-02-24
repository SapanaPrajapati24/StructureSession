import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = ({ route }) => {
    const { name, email,phoneNumber,password } = route.params;
    return (
        <View>
            <Text style={style.shadowContainerStyle}>
                Name is{JSON.stringify(name)}
            </Text>
            <Text style={style.shadowContainerStyle}>
                Email is {JSON.stringify(email)}    
            </Text>
            <Text style={style.shadowContainerStyle}>
                PhoneNumber is {JSON.stringify(phoneNumber)}
            </Text>
            <Text style={style.shadowContainerStyle}>
                password is{JSON.stringify(password)}
            </Text>
        </View>
    )
}

export default Home;

const style = StyleSheet.create({
    textBackground:{
        backgroundColor:'#dadada',
      
    },
    shadowContainerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ff5967',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        margin: 10,
        padding:15,
        
    }

})