import React from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../colors'

const Error = ({ isError, error }) => {
    return (
        <Text style={style.error}>{isError() && error?.message ? error.message : ''}</Text>
    )
}

const Input = ({ field, value, onChange, placeholder, styles, inputStyles, secureTextEntry, error, errorVisible }) => {

    const isError = () => error && error.field == field

    return (
        <View style={styles}>
            <View>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={'#99AAB5'}
                    onChangeText={text => onChange(text)}
                    style={[style.appInput,
                    { fontFamily: 'Roboto', fontWeight: '700' },
                    { borderColor: isError() ? colors.RED : '#C4C4C4' },
                        inputStyles
                    ]}
                    secureTextEntry={secureTextEntry}
                />
                {isError() && <TouchableOpacity style={style.iconContainer} onPress={() => onChange('')}>
                    <Icon name="close" size={22} style={style.icon} />
                </TouchableOpacity>}
            </View>
            {errorVisible && <Error isError={isError} error={error} />}
        </View>
    )
}

const style = StyleSheet.create({
    appInput: {
        borderWidth: 1,
        fontSize: 14,
        color: colors.BLACK,
        alignSelf: "stretch",
        padding: 8,
        marginBottom: 0,
    },
    iconContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        top: 0,
        bottom: 0,
    },
    icon: {
        color: colors.RED,
    },
    error: {
        color: colors.RED,
        fontSize: 13,
        textAlign: 'center',
        fontFamily: 'Roboto', 
        fontWeight: '300'
    }
})

export default Input