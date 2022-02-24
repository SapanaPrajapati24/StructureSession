import React, { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const emptyData = "";

    //    const input1 = useRef();
    //    input1.current.cleare();

    // const dataHandler = () => {

    // }

    // const nameInputHandler = (enteredText) =>{
    //     setName(enteredText)
    //     console.warn(enteredText)
    // }

    // useEffect(() => {
    //     setName('')
    // }, [])

    const onCheckHandler = () => {
        if (name == emptyData) {
            // console.warn("name required")
            alert('name required')
        } else if (email == emptyData) {
            alert('email required')
        } else if (phoneNumber == emptyData) {
            alert('phoneNumber required')
        } else if (password == emptyData) {
            alert('password required')
        } else if (confirmPassword != password) {
            alert('password must be same')
        }
        else {
            navigation.push('Home', {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            })
        }
    }

    const onClickHandler = () => {
        console.warn(name)
    }
    return (
        <View style={style.shadowContainerStyle}>
            <View>
                <Text style={style.signUpText}>Create new account</Text>
                <TextInput
                    placeholder="Name"
                    style={style.textInput}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    placeholder="Email"
                    style={style.textInput}
                    onChangeText={(text) => setEmail(text)} />
                <TextInput
                    placeholder="PhoneNumber"
                    style={style.textInput}
                    onChangeText={(text) => setPhoneNumber(text)} />
                <TextInput
                    placeholder="Password"
                    style={style.textInput}
                    onChangeText={(text) => setPassword(text)} />
                <TextInput
                    placeholder="ConfirmPassword"
                    style={style.textInput}
                    onChangeText={(text) => setConfirmPassword(text)} />
            </View>

            <View>
                <TouchableOpacity style={style.aboutText} onPress={() => navigation.navigate('About')}>
                    <Text style={{ textAlign: 'center' }}>
                        About
                    </Text>
                </TouchableOpacity>

            </View>
            <View>

                <TouchableOpacity style={style.signUpButton} onPress={onCheckHandler}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SignUp;

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
        borderRadius: 40

    },
    signUpText: {
        fontSize: 30,
        alignItems: "center",
        // textAlign: 'center',
        marginLeft: 20,
        color: '#ff5967',
        marginTop: 20,
        fontWeight: 'bold'
    },
    aboutText: {
        margin: 10,
        fontWeight: 'bold'
    },

    // shadowContainerStyle: {
    //     borderWidth: 1,
    //     borderRadius: 5,
    //     borderColor: '#ddd',
    //     borderBottomWidth: 0,
    //     shadowColor: '#000000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.9,
    //     shadowRadius: 3,
    //     elevation: 3,
    //     margin: 10,
    //     paddingBottom: 20
    // }

});
