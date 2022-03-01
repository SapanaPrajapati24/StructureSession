import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FlotingButton from "../../component/FlotingButton";
import FlotingInput from "../../component/FlotingInput";
import { style } from './style'

const SignIn = ({ navigation }) => {
    const [sEmail, setsEmail] = useState({ value: "", error: "" });
    const [sPassword, setSPassword] = useState({ value: "", error: "" });
    const emptyData = "";
    const reg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

    const onSignInHandler = () => {
        if (sPassword.value == emptyData) {
            setSPassword({ ...sPassword, error: "*Passwoed is required..." })
        }
        if (sEmail.value == emptyData) {
            // alert('email required')
            setsEmail({ ...sEmail, error: "*email is required..." })

        } else if (!reg.test(sEmail.value)) {
            setsEmail({ ...sEmail, error: "*email is InValid..." })
        }
        else if ((sEmail.value, sPassword.value) != emptyData) {
            navigation.push('welcome', {
                name: sEmail.value,
                password: sPassword.value
            })
        }
    }

    return (
        <View>
            <Text style={style.signUpText}>SignIn</Text>
            <View>
                <FlotingInput
                    placeholder="Email"
                    changeText={(text) => setsEmail({ value: text, error: "" })}
                    value={sEmail.value}
                    error={sEmail.error} />
                <FlotingInput
                    placeholder="Password"
                    secureTextEntry={true}
                    changeText={(text) => setSPassword({ value: text, error: "" })}
                    value={sPassword.value}
                    error={sPassword.error} />
            </View>

            <FlotingButton btnName="SignIn"
                onPress={onSignInHandler} />


            <Text style={style.orText}>--OR--</Text>
            <View>
                <TouchableOpacity style={style.faceBookButton}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}>
                        LOGIN WITH FACEBOOK
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
export default SignIn;