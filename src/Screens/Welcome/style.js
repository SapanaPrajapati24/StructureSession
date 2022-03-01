import { StyleSheet } from "react-native";
import Color from "../../utils/color";

export const style = StyleSheet.create({
    textBackground:{
        backgroundColor:Color.grey,
      
    },
    shadowContainerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Color.lightGray,
        borderBottomWidth: 0,
        shadowColor: Color.pink,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        margin: 10,
        padding:15,
        
    }

})