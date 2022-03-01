import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FlotingButton from "../../component/FlotingButton";
import FlotingInput from "../../component/FlotingInput";
import Color from "../../utils/color";
import { style } from './style'

const SignUp = ({ navigation }) => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" })
    const [phoneNumber, setPhoneNumber] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" })

    const reg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;



    const onCheckHandler = () => {
        const emptyData = ""


        if (name.value == emptyData) {
            setName({ ...name, error: "*name is required..." })

        }
        // if (email.value == emptyData) {
        //     // alert('email required')
        //     setEmail({ ...email, error: "*email is required..." })

        // }else if (!reg.test(email.value)) {
        //     setEmail({ ...email, error: "*email is InValid..." })
        // }

        if (phoneNumber.value == emptyData) {
            setPhoneNumber({ ...phoneNumber, error: "*phoneNumber is required..." })
        }
        if (password.value == emptyData) {
            setPassword({ ...password, error: "*password is required..." })
        }

        if (confirmPassword.value == emptyData) {
            setConfirmPassword({ ...confirmPassword, error: "*confirmPassword must be required..." })
        }
        
        if (confirmPassword.value != password.value) {
            setConfirmPassword({ ...confirmPassword, error: "*password must be same..." })

        }else  if (email.value == emptyData) {
            // alert('email required')
            setEmail({ ...email, error: "*email is required..." })

        }else if (!reg.test(email.value)) {
            setEmail({ ...email, error: "*email is InValid..." })
        }
        else if ((name.value, email.value, phoneNumber.value, password.value, confirmPassword.value) != "") {
            navigation.push('Home', {
                name: name.value,
                email: email.value,
                phoneNumber: phoneNumber.value,
                password: password.value
            })
        }
    }

    return (
        <View style={style.shadowContainerStyle}>
            <View>
                <Text style={style.signUpText}>Create new account</Text>
                <FlotingInput
                    placeholder="Name"
                    changeText={(text) => setName({ value: text, error: "" })}
                    // (text) => setName({value:text,error: ""}) 
                    value={name.value}
                    error={name.error} />

                <FlotingInput
                    placeholder="Email"
                    changeText={(text) => setEmail({ value: text, error: "" })}
                    value={email.value}
                    error={email.error} />

                <FlotingInput
                    placeholder="PhoneNumber"
                    keyboardType="numeric"
                    changeText={(text) => setPhoneNumber({ value: text, error: "" })}
                    value={phoneNumber.value}
                    error={phoneNumber.error} />

                <FlotingInput
                    placeholder="Password"
                    secureTextEntry={true}
                    changeText={(text) => setPassword({ value: text, error: "" })}
                    value={password.value}
                    error={password.error} />

                <FlotingInput
                    placeholder="ConfirmPassword"
                    secureTextEntry={true}
                    changeText={(text) => setConfirmPassword({ value: text, error: "" })}
                    value={confirmPassword.value}
                    error={confirmPassword.error} />
            </View>

            <View>
                <TouchableOpacity style={style.aboutText} onPress={() => navigation.navigate('About')}>
                    <Text style={{ textAlign: 'center' }}>
                        About
                        <AntDesign name="export" size={18} />
                    </Text>
                </TouchableOpacity>

            </View>

            <FlotingButton btnName="SignUp"
                onPress={onCheckHandler}
                backgroundColor={Color.pink}
            />

        </View>
    )
}
export default SignUp;