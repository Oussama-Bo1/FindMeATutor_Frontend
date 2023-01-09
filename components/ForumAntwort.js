import { View, Text } from 'react-native'
import React from 'react'
import { Title } from './SubInfo'

import { SIZES } from '../constants'

const ForumAntwort = ({ antwort }) => {

    const user = `Antwort von: ${antwort.User}`


  return (
    <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
    }}>

      <View style={{
        
      }}>
        <Title 
          title={user}
          subTitle={antwort.Inhalt}
          titleSize={SIZES.small}
          subTitleSize={SIZES.font}
        />
      </View>
    </View>
  )
}

export default ForumAntwort