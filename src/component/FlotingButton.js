import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Color from "../utils/color";

const FlotingButton = ({ btnName, onPress ,backgroundColor}) => {
    return (
        <TouchableOpacity style={style.signUpButton} onPress={onPress} backgroundColor={backgroundColor}>
            <Text style={style.signInText}>
                {btnName}
            </Text>
        </TouchableOpacity>
    )
}
export default FlotingButton;

const style = StyleSheet.create({
    signUpButton: {
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 15,
        backgroundColor: Color.pink,
        borderRadius: 40

    },
    signInText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
        
    }
})