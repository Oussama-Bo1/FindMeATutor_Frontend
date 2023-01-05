import React, {useState} from "react";
import {View, StyleSheet, ScrollView, Text} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Login from "./Login";
import NewPassword from "./NewPassword";

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