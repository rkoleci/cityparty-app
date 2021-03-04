import React from 'react'
import { StyleSheet, View, Text, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import colors from '../colors'

const SearchBox = () => {
    return (
        <View style={style.appSearchbox}> 
            <Icon name="search" size={20} color="#66757F" style={style.searchIcon} />
            <TextInput style={style.text} /> 
        </View>
    )
}

const style = StyleSheet.create({
    appSearchbox: {
        flexDirection: 'row',
        backgroundColor: colors.GRAY,
        padding: 5,
        alignSelf: 'stretch',
        borderRadius: 30,
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    text: { 
        color: colors.GRAY_DARKER,
        fontSize: 14,
        width: '100%', 
    },
    searchIcon: {
        marginTop: 3,
        marginRight: 10
    }
})

export default SearchBox