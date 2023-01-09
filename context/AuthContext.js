import React, {createContext} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {BASE_URL} from "./Config";
import {defaultProps} from "react-native-web/dist/modules/forwardedProps";

export const AuthContext = createContext(defaultProps);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [userToken, setUserToken] = React.useState(null);
    const [userInfo, setUserInfo] = React.useState(null);

    const login = (username, password) => {
        const url = BASE_URL + 'login/' + username + '/' + password;
        axios.get(url).then( res => {
            console.log(res.data);
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token);
            AsyncStorage.setItem('userToken:', userInfo.token);
            AsyncStorage.setItem('userInfo:', JSON.stringify(userInfo));
        }).catch( err => {
            console.log(err);
        })
    };

    const logout = () => {
        setUserToken(null);
        AsyncStorage.removeItem('userToken')
        AsyncStorage.removeItem('userInfo')
        setUser(null);
    }

    const isLoggedIn = async() => {
        try {
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUser(userInfo);
                setUserToken(userToken);
            }

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <AuthContext.Provider value={{login, logout, isLoggedIn, userInfo, userToken}}>
        {children}
        </AuthContext.Provider>
    );
}
