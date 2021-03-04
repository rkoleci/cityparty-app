import React from 'react'
import { StyleSheet, Text } from 'react-native'

import colors from '../../colors'

const FilterLabel = ({ text }) => {
    return (
        <Text style={style.appFilter}>{text}</Text>
    )
}

const style = StyleSheet.create({
    appFilter: {
        textTransform: 'uppercase',
        color: '#99AAB5',
        fontSize: 20,
        fontWeight: '700',
    }
})

export default FilterLabel