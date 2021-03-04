import React from 'react'
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native'

import { ViewWrapper, MainBtn, } from '../../common'
import colors from '../../colors'

const WelcomeScreen = ({ navigation }) => {
  return (
    <ViewWrapper styles={style.container}>
      <ImageBackground source={require('../../assets/splashbg.jpg')} style={style.img}>
       <View style={style.content}>
       <View style={{ flex: 1 }} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={style.logo} source={require('../../assets/logo.png')} />
          <Text style={style.text}>Cityparty</Text>
        </View>
        <View style={{ flex: 7, justifyContent: 'flex-end' }}>
          <MainBtn title="Login" type="red" thick style={style.btn} onClick={() => navigation.navigate('Login')} style={{ marginBottom: 20 }} />
          <MainBtn title="Register" type="white" thick style={style.btn} onClick={() => navigation.navigate('Register')} />
        </View>
        <View style={{ flex: 1 }} />
       </View>
      </ImageBackground>
    </ViewWrapper>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  text: {
    color: colors.BLACK,
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 10,
    fontFamily: "Roboto",
    fontWeight: '700'
  },
});


export default WelcomeScreen