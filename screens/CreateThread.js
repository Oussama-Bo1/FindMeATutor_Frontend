import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, TextInput } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { ForumMockData } from "../constants/ForumMockData";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import ForumCard from "../components/ForumCard";
import { Title } from "../components/SubInfo";
import { FlatList } from 'react-native-gesture-handler';

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

const CreateThread = ({ route, navigation }) => {

  const { data } = route.params;
  const [newThreadTitel, setNewThreadTitel] = useState('');
  const [newThreadFrage, setNewThreadFrage] = useState('');



    return (
        <SafeAreaView style={{ flex: 1 }}>
          <FocusedStatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
    
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: SIZES.extraLarge,
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
                      Stelle selber eine Frage und lass Dir von der Community helfen!
                    </Text>
                  
                </View>
                
              </React.Fragment>
            )}
          />
          <View style = {{ 
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.font,
                    marginBottom: SIZES.extraLarge,
                    margin: SIZES.base,
                    ...SHADOWS.dark
                }}>
                    <View style={{
                        width: "100%",
                    }}>
                        <View style={{
                            
                        }}>
                            <View style={{
                                margin: SIZES.font,
                                flexDirection: "row", 
                                justifyContent: "space-between",
                                alignItems: 'center'
                            }}>
                                <TextInput style={{
                                    borderWidth: 1,
                                    borderColor: COLORS.primary,
                                    padding: SIZES.font,
                                    margin: SIZES.font,
                                    width: '100%'
                                }}
                                placeholder='Titel Deiner Frage...'
                                placeholderTextColor={COLORS.gray}
                                multiline
                                onChangeText={(val) => setNewThreadTitel(val)}
                                
                                />
                                <RectButton 
                                    text={"Thread erstellen"} 
                                    minWidth={170} 
                                    fontSize={SIZES.large} 
                                    handlePress={() => console.log(newThreadTitel + ', ' + newThreadFrage)}
                                    {...SHADOWS.dark} 
                                />
                            </View>
                            <TextInput style={{
                                borderWidth: 1,
                                borderColor: COLORS.primary,
                                padding: SIZES.font,
                                margin: SIZES.font,
                                width: '95%'
                            }}
                            placeholder='Führe Deine Frage aus...'
                            placeholderTextColor={COLORS.gray}
                            multiline
                            onChangeText={(val) => setNewThreadFrage(val)}
                            
                            />
                        </View>
                    </View>
                </View>
        </SafeAreaView>
        
        
    )
}

export default CreateThread