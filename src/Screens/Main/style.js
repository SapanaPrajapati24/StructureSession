import { StyleSheet } from "react-native";
import Color from "../../utils/color";

export const style = StyleSheet.create({
    mSignInButton: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 15,
        backgroundColor: Color.pink,
        borderRadius: 40
    },
    mSignUpButton: {
        marginHorizontal: 40,
        marginVertical: 5,
        padding: 15,
        borderColor: Color.pink,
        borderWidth: 2,
        borderRadius: 40
    },

    textStyle: {
        textAlign: 'center',
        color: Color.pink,
        fontSize: 20,
        marginHorizontal: 90,
        fontWeight: 'bold'
    },
    mainDiv: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%'

    },
    text:{textAlign: 'center'}

})

