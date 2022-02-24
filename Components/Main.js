import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const Main = ({ navigation }) => {
    return (
        <View style={style.mainDiv}>

            <Text style={style.textStyle}>Say hello to your new app</Text>
            <View>
                <TouchableOpacity style={style.mSignInButton} onPress={() => navigation.navigate('signIn')}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}>
                        Log In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.mSignUpButton} onPress={() => navigation.navigate('signUp')}>
                    <Text style={{ textAlign: 'center', color: '#ff5967' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <AntDesign name="left" size={30} color="#900" /> */}
        </View>

    )
}

export default Main;

const style = StyleSheet.create({
    mSignInButton: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#ff5967',
        borderRadius: 40
    },
    mSignUpButton: {
        marginHorizontal: 40,
        marginVertical: 5,
        padding: 15,
        borderColor: '#ff5967',
        borderWidth: 2,
        borderRadius: 40
    },

    textStyle: {
        textAlign: 'center',
        color: '#ff5967',
        fontSize: 20,
        marginHorizontal: 90,
        fontWeight: 'bold'
    },
    mainDiv: {
        display: 'flex',
        // alignItems:'center',
        // backgroundColor:'#4367b4',
        justifyContent: 'center',
        height: '100%'

    },

})

// pink code : #ff5967
// blue code : #4367b4
//grey code :#dadada