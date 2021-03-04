import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

import colors from '../colors'

const InputMessage = ({ value, onChange }) => {

    return (
        <TextInput 
            value={value}
            placeholder={'write a message'}
            placeholderTextColor="#AEBBC1"
            onChangeText={text => onChange(text)}
            style={style.appInput}
        />
    )
}

const style = StyleSheet.create({
    appInput: { 
        backgroundColor: '#EEEEEE',
        borderColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 14,
        color: colors.BLACK,
        alignSelf: "stretch",
        paddingVertical: 10,
        paddingHorizontal: 20
    }
})

export default InputMessage