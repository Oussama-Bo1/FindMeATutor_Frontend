import React, {useState} from "react";
import {View, StyleSheet, ScrollView, Text} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import ConfirmEmail from "./ConfirmEmail";
import Login from "./Login";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigation = useNavigation();

    const onSignInPressed = () => {
        //TODO: Add login logic
        navigation.navigate(Login);
    };
    const onRegisterPressed = () => {
        //TODO: Add register logic
        navigation.navigate(ConfirmEmail);
    };
    const onTermsOfUsePressed = () => {
        console.warn("Terms of use pressed");
    };
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy policy pressed");
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Erstelle ein Konto</Text>
        <CustomInput
            placeholder="Benutzername"
            value={username}
            setValue={setUsername}
        />
        <CustomInput
            placeholder="E-Mail"
            value={email}
            setValue={setEmail}
        />
        <CustomInput
            placeholder="Passwort"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
        />
        <CustomInput
            placeholder="Passwort bestätigen"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
        />

        <CustomButton
            text="Registrieren"
            onPress={onRegisterPressed}
        />

        <Text style={styles.text}>Mit der Registrierung stimmen Sie unseren
            <Text style={styles.link} onPress={onTermsOfUsePressed}>Nutzungsbedingungen</Text>
            und den
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Datesnchutzbestimmungen</Text>
            zu.</Text>

        <CustomButton
            text="Hast du schon ein Konto? Anmelden"
            onPress={onSignInPressed}
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

export default SignUp;