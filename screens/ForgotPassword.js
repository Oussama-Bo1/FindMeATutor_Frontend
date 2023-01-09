import React, {useState} from "react";
import {View, StyleSheet, ScrollView, Text, StatusBar, Image} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Login from "./Login";
import NewPassword from "./NewPassword";
import {assets} from "../constants";
import {CircleButton} from "../components";
import Logo from "../assets/images/logo.png";

const ForgotPassword = () => {
    const [username, setUsername] = useState("");
    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate(NewPassword);
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
            placeholder="Username"
            value={username}
            setValue={setUsername}
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

export default ForgotPassword;