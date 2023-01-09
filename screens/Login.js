import React, {useContext, useState} from "react";
import {View, Image, StyleSheet, useWindowDimensions, ScrollView, StatusBar, Text, Button} from "react-native";
import Logo from "../assets/images/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation} from "@react-navigation/native";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import {assets} from "../constants";
import {CircleButton} from "../components";
import {AuthContext} from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const {login} = useContext(AuthContext);

    const onSignInPresses = () => {
        //TODO: Add login logic
        const {test} = useContext(AuthContext);
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
        <CircleButton
            imgURL={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
        <CustomInput
            placeholder="E-Mail Adresse"
            value={username}
            setValue={setUsername}
        />
        <CustomInput
            placeholder="Passwort"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
        />

        <Button title="Anmelden"
                onPress={login(username, password)}
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