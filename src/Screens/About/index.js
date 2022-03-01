import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {style} from './style'
const About = () => {
    return (
        <View style={style.shadowContainerStyle}>
            <Text style={style.aboutText}>
                React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
                Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.
            </Text>
            <Text style={style.aboutText}>
                React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do.
                Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across platforms. With React Native, one team can maintain two platforms and share a common technology—React.
            </Text>
        </View>
    )
}
export default About;