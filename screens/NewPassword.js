import React, {useState} from "react";
import {View, StyleSheet, ScrollView, Text, StatusBar, Image} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Home from "./Home";
import Login from "./Login";
import {assets} from "../constants";
import {CircleButton} from "../components";
import Logo from "../assets/images/logo.png";

const NewPassword = () => {
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate(Home);
    };
    const onBackToLoginPressed = () => {
        navigation.navigate(Login);
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <CircleButton
            imgURL={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />
      <Text style={styles.title}>Passwort zurücksetzen</Text>
        <CustomInput
            placeholder="Code"
            value={code}
            setValue={setCode}
        />

        <CustomInput
            placeholder="Neues Passwort"
            value={newPassword}
            setValue={setNewPassword}
        />

        <CustomButton
            text="Senden"
            onPress={onSendPressed}
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

export default NewPassword;