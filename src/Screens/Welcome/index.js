import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../../utils/color";
import {style} from './style'

const Welcome = ({route}) => {
    const {name,password} = route.params;
    return(
        <View>
            <Text style={style.shadowContainerStyle}>
                Welcome {name}
            </Text>
        </View>
    )
}
export default Welcome;