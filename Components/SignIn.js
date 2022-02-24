import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignIn = () => {
    return (
        <View>
            <Text style={style.signUpText}>SignIn</Text>
            <View>
                <TextInput
                    placeholder="Email"
                    style={style.textInput} />
                <TextInput
                    placeholder="Password"
                    style={style.textInput} />
            </View>
            <View>
                <TouchableOpacity style={style.signUpButton}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}>
                        SignIn
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={style.orText}>--OR--</Text>
            <View>
                <TouchableOpacity style={style.faceBookButton}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}>
                        Login with facebook
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default SignIn;
const style = StyleSheet.create({
    textInput: {
        borderColor: "#dadada",
        borderWidth: 2,
        marginHorizontal: 30,
        marginVertical: 10,
        marginBottom: 10,
        paddingLeft: 15,
        borderRadius: 40,
      
    },
    signUpButton: {
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#ff5967',
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center'

    },
    faceBookButton: {
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#4367b4',
        borderRadius: 40

    },
    signUpText: {
        fontSize: 25,
        marginLeft: 20,
        // textAlign: 'center',
        fontWeight: 'bold',
        color: '#ff5967',
        marginTop: 10,
        marginBottom:10
    },
    orText: {
        color: '#000',
        textAlign: 'center',
        marginVertical: 20
    }



});