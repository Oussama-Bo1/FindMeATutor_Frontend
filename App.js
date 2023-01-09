
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";
import Booking from "./screens/Booking";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ConfirmEmail from "./screens/ConfirmEmail";
import ForgotPassword from "./screens/ForgotPassword";
import NewPassword from "./screens/NewPassword";
import {AuthContext, AuthProvider} from "./context/AuthContext";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;
  const {userToken} = React.useContext(AuthContext);
  let initialRouteName = userToken !== null ? "Home" : "Login";

  return (
      <AuthProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      initialRouteName = {initialRouteName}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Booking" component={Booking}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail}/>
      </Stack.Navigator>
    </NavigationContainer>
      </AuthProvider>
  );
};

export default App;