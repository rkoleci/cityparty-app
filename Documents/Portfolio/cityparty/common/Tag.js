import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native' 

import colors from '../colors'

const Tag = ({ text, onChange, disabled, pressed }) => {
    const [selected, setSelected] = useState(pressed)

    useEffect(() => {
        setSelected(pressed)
    }, [pressed])

    useEffect(() => {
        if (onChange) {
            onChange(selected)
        }
    }, [selected])

    return (
        <TouchableOpacity disabled={disabled} onPress={() => {
            !disabled && setSelected(!selected)
        }} style={[style.appTag, { backgroundColor: !selected ? colors.WHITE : '#EEEEEE' }]}>
            <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    appTag: {
         color: colors.BLACK,
         fontSize: 15,
         paddingVertical: 10,
         paddingHorizontal: 20,
         alignSelf: 'stretch',  
         borderRadius: 20,
         borderWidth: 1,
         borderColor: '#EEEEEE'
    },
    text: {
        textAlign: 'center'
    }
})

export default Tag