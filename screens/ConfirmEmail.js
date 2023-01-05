import React, {useState} from "react";
import {View, StyleSheet, ScrollView, Text} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Home from "./Home";
import Login from "./Login";

const ConfirmEmail = () => {
    const [code, setCode] = useState("");
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate(Home);
    };
    const onResendPressed = () => {
        console.warn("Resend pressed");
    };
    const onBackToLoginPressed = () => {
        navigation.navigate(Login);
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Bestätige deine E-Mail Adresse</Text>
        <CustomInput
            placeholder="Code"
            value={code}
            setValue={setCode}
        />

        <CustomButton
            text="Bestätigen"
            onPress={onConfirmPressed}
        />

        <CustomButton
            text="Erneut senden"
            onPress={onResendPressed}
            type="SECONDARY"
        />

        <CustomButton
            text="Zurück zum Login"
            onPress={onBackToLoginPressed}
            type="TERTIARY"
        />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    text: {
        color: "grey",
        marginVertical: 10,
    },
    link: {
        color: "#FDB075",
    },
});

export default ConfirmEmail;