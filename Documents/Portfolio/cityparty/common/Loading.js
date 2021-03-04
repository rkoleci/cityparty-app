import React from 'react'
import { ActivityIndicator, Text } from 'react-native'

import colors from '../colors'

const Loading = ({ status, children, result }) => {
    if (status == 'loading') {
        return <ActivityIndicator size="large" color={colors.RED} />
    }
    if (status == 'result') {
        return <Text style={{textAlign: 'center'}}>{result}</Text>
    }
    return (
        <>{children}</>
    )
}

export default Loading