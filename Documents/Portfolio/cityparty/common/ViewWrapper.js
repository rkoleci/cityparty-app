import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from '../colors'

const ViewWrapper = ({ children, styles }) => {
    return (
        <View style={[style.appView, styles]}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    appView: {
        backgroundColor: colors.WHITE,
        flex: 1,
        padding: 16
    }
})

export default ViewWrapper