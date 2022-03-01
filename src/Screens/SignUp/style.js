import { StyleSheet } from "react-native";
import Color from "../../utils/color";

export const style = StyleSheet.create({
    signUpButton: {
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 15,
        backgroundColor: Color.pink,
        borderRadius: 40

    },
    signUpText: {
        fontSize: 30,
        alignItems: "center",
        marginLeft: 20,
        color: Color.pink,
        marginTop: 20,
        fontWeight: 'bold'
    },
    aboutText: {
        margin: 10,
        fontWeight: 'bold'
    },



});
