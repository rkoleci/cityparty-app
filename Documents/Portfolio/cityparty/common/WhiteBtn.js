import React from 'react'
import { StyleSheet, TouchableOpacity, Text,   } from 'react-native'

import colors from '../colors'

const WhiteBtn = ({ title, onClick, style }) => {
    return (
        <TouchableOpacity onPress={onClick} buttonStyle={[styles.appButtonContainer, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({ 
    appButtonContainer: {
      elevation: 8,  
      paddingVertical: 15, 
      fontSize: 16, 
      color: colors.BLACK,
      width: '100%', 
      backgroundColor: 'white'
    }, 
    text: {
      color: colors.BLACK,
      fontSize: 22,
      textAlign: 'center',
      textTransform: 'uppercase', 
      fontFamily: "Roboto",
      fontWeight: '700'
    } 
  });

export default WhiteBtn 