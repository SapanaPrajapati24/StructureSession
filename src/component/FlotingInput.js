import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FlotingInput = ({changeText,placeholder,secureTextEntry,value,targetName,error,keyboardType}) => {
    return(
        <View>
            <TextInput
             style={style.textInput} 
             onChangeText={changeText}
             placeholder={placeholder}
             secureTextEntry={secureTextEntry}
             value={value}
             keyboardType={keyboardType}
             name={targetName}/>
             <Text style={style.errorText}>{error}</Text>
        </View>
    )
}
export default FlotingInput;

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
    errorText :{
        marginHorizontal:30,
        color:'red'
    }
})