import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Button } from 'react-native'

import colors from '../colors'

const BigBtn = ({ title, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    appButtonContainer: {
      elevation: 8,
      backgroundColor: colors.BLUE_LIGHT,
      borderRadius: 30,
      paddingVertical: 15, 
      width: '100%'
    },
    appButtonText: {
      fontSize: 16, 
      color: colors.WHITE,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

export default BigBtn 