import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Button } from 'react-native'

import colors from '../colors'

const ActionBtn = ({ title, type, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick} style={[styles.appButtonContainer, {backgroundColor: type === 'red' ? colors.RED : colors.BLUE  }]}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    appButtonContainer: {
      elevation: 8,
      borderRadius: 30,
      paddingVertical: 15, 
      width: '100%'
    },
    appButtonText: {
      fontSize: 14, 
      color: colors.WHITE,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "capitalize"
    }
  });

export default ActionBtn 