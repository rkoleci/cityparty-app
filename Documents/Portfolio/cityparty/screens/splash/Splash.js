import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import { ViewWrapper, Typing, Tag, FilterLabel, PageTitle, Message, MainBtn, ActionBtn, BigBtn, Avatar, SearchBox, Select, SearchBoxDropdown, InputMessage, Input } from '../../common'
import colors from '../../colors'

const SplashScreen = ({ navigation }) => {
 // navigation.navigate('Main', { screen: 'Profile' });
   navigation.navigate('Welcome');
  return (
    <ViewWrapper styles={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo/logo_normal.png')} />
      <Text style={styles.text}>Cityparty</Text>
    </ViewWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  text: {
    color: colors.BLACK,
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30, 
    fontFamily: "Roboto",
    fontWeight: '700'
  }
});

export default SplashScreen


// <Text>Splash</Text>
// <SearchBox />
// <PageTitle text="Filters" />
// <Message text="yes for sure" />
// <Message text="yes for sure hi whats up" type="received"/>
// <MainBtn title="Login" type="red" />
// <MainBtn title="Register" type="white" />
// <ActionBtn title="Enter" type="blue" />
// <ActionBtn title="novita" type="red" />
// <BigBtn title="Show 187 people" />
// <Tag text="travel" onChange={(selected) => console.log(selected)} />
// <FilterLabel text="Gender" />
// <Input value={'Rei'} onChange={e => console.log(e)} placeholder="NAME" />
// <InputMessage value={'Rei'} onChange={e => console.log(e)} placeholder="NAME" />
// <Select
//   placeholder="Select a value"
//   onChange={(item) => console.log('Select changed', item)}
//   items={[
//     { label: 'USA', value: 'usa', hidden: true },
//     { label: 'UK', value: 'uk', },
//     { label: 'France', value: 'france', },
//   ]} />
//    <SearchBoxDropdown
//   placeholder="Select a value"
//   onChange={(item) => console.log('Select changed', item)}
//   items={[
//     { label: 'USA', value: 'usa', hidden: true },
//     { label: 'UK', value: 'uk', },
//     { label: 'France', value: 'france', },
//   ]} />
// <Avatar size="extra-small" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
// <Typing />
// <Avatar size="small" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
// <Avatar size="medium" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
// <Avatar size="large" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />