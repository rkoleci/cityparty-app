import React, { useState, useEffect } from 'react'
import { StyleSheet, View, } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

import colors from '../colors'

const Select = ({ items, placeholder, defaultValue, onChange }) => {
    const [selected, setSelected] = useState({})

    useEffect(() => {
        onChange(selected)
    }, [selected])

    return (
        <DropDownPicker
            items={items}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChangeItem={item => setSelected(item)}
            containerStyle={style.appSelectContainer}
            style={style.appSelect}
            itemStyle={style.itemStyle}
            dropDownStyle={style.dropDownStyle}
            labelStyle={style.labelStyle} 
            style={{zIndex: 9000}}
        />
    )
}

const style = StyleSheet.create({
    appSelectContainer: {
        height: 40,
        width: '100%',
        backgroundColor: colors.WHITE,
    },
    appSelect: {
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30, 
        borderBottomRightRadius: 30,
        backgroundColor: colors.WHITE,
    },
    itemStyle: {
        justifyContent: 'flex-start',
        backgroundColor: colors.WHITE,

    },
    dropDownStyle: {
        backgroundColor: colors.WHITE,
    },
    labelStyle: {
        fontSize: 16,
        color: colors.BLACK,
    }
})

export default Select 