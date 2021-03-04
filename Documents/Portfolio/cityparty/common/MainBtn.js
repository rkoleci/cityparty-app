import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import colors from '../colors'

const MainBtn = ({ title, type, onClick, style, thick }) => {
  return (
    <View style={[
      styles.appButtonView,
      style,
      { backgroundColor: type === 'red' ? colors.RED : colors.WHITE, }
    ]}>
      <TouchableOpacity
        onPress={onClick}
        style={[
          styles.appButtonContainer,
          {
            backgroundColor: type === 'red' ? colors.RED : colors.WHITE,
            paddingVertical: thick ? 20 : 15
          }
        ]}>
        <Text style={[styles.appButtonText, { color: type === 'red' ? colors.WHITE : colors.BLACK }]}>{title}</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  appButtonView: {
    borderRadius: 30,
    width: '100%',
    elevation: 8,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.RED,
    borderRadius: 30,
    width: '100%'
  },
  appButtonText: {
    fontSize: 16,
    color: colors.WHITE,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: '700'
  }
});

export default MainBtn 