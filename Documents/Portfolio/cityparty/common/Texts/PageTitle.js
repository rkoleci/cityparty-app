import React from 'react'
import { StyleSheet, Text } from 'react-native'

import colors from '../../colors'

const PageTitle = ({ text }) => {
    return (
        <Text style={style.appPageTitle}>{text}</Text>
    )
}

const style = StyleSheet.create({
    appPageTitle: {
        textTransform: 'uppercase',
        color: colors.BLACK,
        fontSize: 22,
        fontWeight: '700',
    }
})

export default PageTitle