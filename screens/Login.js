import React, {useState} from "react";
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../assets/images/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation} from "@react-navigation/native";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { height } = useWindowDimensions();
    const navigation = useNavigation();


    const onSignInPresses = () => {
        //TODO: Add login logic
        navigation.navigate(Home);
    };
    const onForgotPasswordPressed = () => {
        //TODO: Add forgot password logic
        navigation.navigate(ForgotPassword);
    };
    const onSignUpPressed = () => {
        //TODO: Add sign up logic
        navigation.navigate(SignUp);
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
        <CustomInput
            placeholder="Benutzername"
            value={username}
            setValue={setUsername}
        />
        <CustomInput
            placeholder="Passwort"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
        />

        <CustomButton
            text="Anmelden"
            onPress={onSignInPresses}
        />

        <CustomButton
            text={"Passwort vergessen?"}
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
        />

        <CustomButton
            text={"Noch kein Konto? Registrieren"}
            onPress={onSignUpPressed}
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
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default Login;