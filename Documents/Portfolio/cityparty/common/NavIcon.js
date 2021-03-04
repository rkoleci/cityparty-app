import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { startUp } from '../core/actions'

const NavIcon = ({ name }) => {

    const COLOR_VISIBLE = '#DD2E44'
    const COLOR_INVINSIBLE = '#fff'

    const [hasUnreadMessages, setHasUnreadMessages] = useState(false)

    const dispatch = useDispatch()

    let startupReducer = useSelector(state => state.startupReducer)
    console.log(hasUnreadMessages)

    useEffect(() => {
        dispatch(startUp())
    }, [])

    useEffect(() => {
        setHasUnreadMessages(startupReducer.data?.has_unread_messages)
    }, [startupReducer])
   

    if (startupReducer && !name) {
        return (
            <>
                <Image source={require('../assets/logo.png')} style={style.appNavIcon} />
                <Icon name={'circle'} color={COLOR_INVINSIBLE} size={6} />
            </>
        )
    }

    if (name) {
        return (
            <>
                <Icon name={name} color={'#99AAB5'} size={30} style={{marginTop: 15}}/>
                <Icon name={'circle'} color={name == 'inbox' && hasUnreadMessages ? COLOR_VISIBLE: COLOR_INVINSIBLE} size={6} />
            </>
        )
    }


}

const style = StyleSheet.create({
    appNavIcon: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginTop: 15
    }
})

export default NavIcon