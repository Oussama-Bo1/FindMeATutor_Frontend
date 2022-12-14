import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

import { COLORS, FONTS, SIZES, assets } from '../constants'
import {CircleButton} from "./Button";
import {useNavigation} from "@react-navigation/native";
import Login from "../screens/Login";
import {AuthContext} from "../context/AuthContext";

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  const {userInfo} = React.useContext(AuthContext);



  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Image 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 100, height: 50 }}
        />

        <View style={{ width:45, height: 45 }}>
          <CircleButton
            imgURL={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
            handlePress={() => navigation.navigate(Login)}
          />
          <Image 
            source={assets.badge}
            resizeMode="contain"
            style={{ position: "absolute", width: 15, height: 15, bottom: 0, right: 0 }}
          />
        </View>
      </View>

      <View style={{ margin: SIZES.font }}>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.white }}>
          Hallo {userInfo.email},
        </Text>
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2 }}>
          Fange jetzt an und werde zum 1er Schüler!
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: "100%",
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          <Image 
          source={assets.search}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput 
          placeholder='Suche...'
          style={{ flex: 1 }}
          onChangeText={ onSearch }
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader