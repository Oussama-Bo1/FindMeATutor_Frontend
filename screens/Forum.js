import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { ForumMockData } from "../constants/ForumMockData";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import ForumCard from "../components/ForumCard";

const DetailsHeader = ({ data, navigation }) => (

  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgURL={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Forum = ({ route, navigation }) => {

  const [forumMockData, setForumMockData] = useState(ForumMockData);
  const { data } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <FocusedStatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
    
          <View
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              paddingVertical: SIZES.font,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.5)",
              zIndex: 1,
            }}
          >
            <RectButton 
              text={"Stelle selber eine Frage"} 
              minWidth={170} 
              fontSize={SIZES.large} 
              handlePress={() => navigation.navigate("CreateThread", { data })}
              {...SHADOWS.dark} 
              />
          </View>
    
          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: SIZES.extraLarge * 3,
            }}
            ListHeaderComponent={() => (
              <React.Fragment>
                <DetailsHeader data={data} navigation={navigation} />
                
                <View style={{ padding: SIZES.font }}>
    
                    <Text
                      style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                      }}
                    >
                      Wie kann dir die Community helfen?
                    </Text>
                  
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ zIndex: 0 }}>
                        <FlatList 
                            data = {forumMockData}
                            renderItem = {({ item }) => <ForumCard data={ item }/>}
                            keyExtractor = {(item) => item.id}
                            showsVerticalScrollIndicator = {false}
                        />
                  </View>
                </View>
              </React.Fragment>
            )}
          />
        </SafeAreaView>
    )
}

export default Forum