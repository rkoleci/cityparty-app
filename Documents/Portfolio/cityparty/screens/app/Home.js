import React, { useEffect } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar'; 

const HomeScreen = ({ navigation }) => { 

    useEffect(() => {
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
      })
    }, [])

    return (
        <View style={styles.container}>
        <Text>HomeScreen  </Text>
        <StatusBar style="auto" />
      </View>
    )
} 

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  

export default HomeScreen