import { StyleSheet } from "react-native";
import Color from "../../utils/color";

export const style = StyleSheet.create({
    textInput: {
        borderColor: Color.grey,
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
        backgroundColor: Color.pink,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center'

    },
    faceBookButton: {
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 15,
        backgroundColor: Color.blue,
        borderRadius: 40

    },
    signUpText: {
        fontSize: 25,
        marginLeft: 20,
        // textAlign: 'center',
        fontWeight: 'bold',
        color: Color.pink,
        marginTop: 10,
        marginBottom: 10
    },
    orText: {
        color: Color.black,
        textAlign: 'center',
        marginVertical: 20
    }



});