import React from 'react'
import { StyleSheet, Text } from 'react-native' 

const Typing = () => {
    return (
        <Text style={style.appTyping}>is typing...</Text>
    )
}

const style = StyleSheet.create({
    appTyping: { 
        color: '#99AAB5',
        fontSize: 24, 
    }
})

export default Typing