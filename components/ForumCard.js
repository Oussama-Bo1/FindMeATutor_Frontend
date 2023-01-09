import { View, Image, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, Title } from './SubInfo';
import { FlatList } from 'react-native-gesture-handler';
import ForumAntwort from './ForumAntwort';

const ForumCard = ({ data }) => {

    const [answer, setAnswer] = useState('');


  return (
    <View style = {{ 
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
        }}>

      <View style={{
        width: "100%",
        padding: SIZES.font
      }}>
        <Title 
          title={data.Titel}
          subTitle={data.Frage}
          titleSize={SIZES.large}
          subTitleSize={SIZES.font}
        />
      

        <View style={{
          margin: SIZES.font,
          flexDirection: "row", 
          justifyContent: "space-between",
          alignItems: 'center',
        }}>
          <FlatList 
            data={data.Antwort}
            renderItem={({ item }) => <ForumAntwort antwort={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: SIZES.extraLarge * 3,
            }}
          
          />
          
        </View>
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
                width: '66%'
            }}
            placeholder='Hilf Deiner Community...'
            placeholderTextColor={COLORS.gray}
            multiline
            onChangeText={(val) => setAnswer(val)}
            />
            <RectButton 
             text={"Abschicken"}  
             fontSize={SIZES.large} 
             handlePress={() => console.log(answer)}
             {...SHADOWS.dark}
            />
        </View>

      </View>
    </View>
  )
}

export default ForumCard