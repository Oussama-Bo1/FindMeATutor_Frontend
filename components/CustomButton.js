import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const CustomInput = ({ text, onPress, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container,
            styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}
                ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3B71F3",

        width: "100%",

        padding: 15,
        marginVertical: 5,

        alignItems: "center",
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: "#3B71F3",
    },

    container_SECONDARY: {
        borderColor: "#3B71F3",
        borderWidth: 2,
    },

    container_TERTIARY: {
        backgroundColor: "transparent",
    },

    text: {
        fontWeight: "bold",
        color: "white",
    },

    text_SECONDARY: {
        color: "white",
    },

    text_TERTIARY: {
        color: "grey",
    }

});

export default CustomInput;
