import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FlotingButton from "../../component/FlotingButton";
import Color from "../../utils/color";
import {style} from './style'

const Main = ({ navigation }) => {
    return (
        <View style={style.mainDiv}>

            <Text style={style.textStyle}>Say hello to your new app</Text>
            <View>
                <TouchableOpacity style={style.mSignInButton} onPress={() => navigation.navigate('signIn')}>
                    <Text style={[style.text,{ color: Color.white }]}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                {/* <FlotingButton 
                 onPress={() => navigation.navigate('signIn')}
                /> */}

                <TouchableOpacity style={style.mSignUpButton} onPress={() => navigation.navigate('signUp')}>
                    <Text style={[style.text,{ color: Color.pink }]}>
                        SIGNUP
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <AntDesign name="left" size={30} color="#900" /> */}
        </View>

    )
}

export default Main;