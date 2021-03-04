import React from 'react'
import { StyleSheet, View,  Text } from 'react-native'

import colors from '../../colors'

const Message = ({ text, type }) => {
    return (
        <View>
            <Text style={[style.appMessage,
            { backgroundColor: type === 'received' ? '#f5f5f5' : colors.WHITE }
            ]}>{text}</Text>
            <Text style={style.time}>12:54</Text>
        </View>
    )
}

const style = StyleSheet.create({
    appMessage: {
        color: '#1D1D1D',
        fontSize: 16,

        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 20,

        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.GRAY_LIGHT,
    },
    time: {
        position: 'absolute',
        bottom: 5,
        right: 10,

        fontSize: 12,
        color: '#99AAB5'
    }
})

export default Message