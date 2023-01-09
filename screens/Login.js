import React, {useContext, useState} from "react";
import {View, Image, StyleSheet, useWindowDimensions, ScrollView, StatusBar, TextInput, Button} from "react-native";
import Logo from "../assets/images/logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation} from "@react-navigation/native";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import {assets, COLORS, SIZES, SHADOWS} from "../constants";
import {CircleButton, RectButton} from "../components";
import {AuthContext} from "../context/AuthContext";

const Login = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const {login} = useContext(AuthContext);
    const [benutzername, setBenutzername] = useState('');
    const [benutzerPasswort, setBenutzerPasswort] = useState('');

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
            handlePress={() => navigation.navigate(Home)}
            left={15}
            top={StatusBar.currentHeight + 10}
        />
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
      <TextInput style={{
                borderWidth: 1,
                borderColor: COLORS.primary,
                padding: SIZES.font,
                margin: SIZES.font,
                width: '100%'
            }}
            placeholder='Login...'
            onChangeText={(val) => setBenutzername(val)}
            />
            <TextInput style={{
                borderWidth: 1,
                borderColor: COLORS.primary,
                padding: SIZES.font,
                margin: SIZES.font,
                width: '100%'
            }}
            placeholder='Passwort...'
            onChangeText={(val) => setBenutzerPasswort(val)}
            secureTextEntry={true}
            />

        <RectButton 
        text={"Anmelden"}  
        fontSize={SIZES.large} 
        handlePress={() => login(benutzername, benutzerPasswort)}
        {...SHADOWS.dark}
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