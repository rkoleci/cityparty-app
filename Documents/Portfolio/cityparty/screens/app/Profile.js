import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../colors'
import { Tag } from '../../common'
import utils from '../../core/utils'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const interests = ['design', 'grafica', 'travel', 'moda', 'fashion',]
const pic = '../../assets/logo.png'
const photos = [pic, pic, pic, pic, pic, pic, pic, pic] 

const Header = () => {
  return (
    <View style={{ justifyContent: 'flex-start', paddingHorizontal: 20, paddingTop: 40, paddingBottom: 15 }}>
      <Image source={require('../../assets/logo.png')} style={styles.profileImg} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.appUsername}>Ginevra.ranieri</Text>
        <Text style={styles.appAge}>26</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={'compass'} color={'#99AAB5'} size={16} />
        <Text style={styles.appLocation}>Milano, Lombardia, Italia</Text>
      </View>
    </View>
  )
}

const Bio = () => {
  return (
    <View style={{ paddingHorizontal: 20, marginBottom: 25}}>
      <Text style={styles.bio}>📚 Interior Design Student</Text>
      <Text style={styles.bio}>📐 Politecnico di Milano</Text>
      <Text style={styles.bio}>👠 Fashion lover</Text>
    </View>
  )
}

const Interests = () => {
  return (
    <View style={{ paddingHorizontal: 10, marginBottom: 20 }}>
      {utils.toGrid(interests).filter(i => Array.isArray(i)).map(row => {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
            {row.map((rowItem, x) => <View style={{ width: (windowWidth - 62) / 3 }}>{rowItem != '' && <Tag text={rowItem} disabled pressed={true} />}</View>)}
          </View>
        )
      })}
    </View>
  )
}

const SocialLinks = () => {
  return (
    <View style={{ paddingHorizontal: 20, marginBottom: 30}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={'instagram'} color={'#99AAB5'} size={22} style={{ marginTop: 5 }} />
        <Text style={styles.social}>ginevra.ranni</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={'instagram'} color={'#99AAB5'} size={22} style={{ marginTop: 5 }} />
        <Text style={styles.social}>ginevra.ranni</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <Icon name={'snapchat'} color={'#99AAB5'} size={22} style={{ marginTop: 5 }} />
        <Text style={styles.social}>ginevra.ranni</Text>
      </View>
    </View>
  )
}

const Photos = () => {
  return (
    <View>
      {utils.toGrid(photos).filter(i => Array.isArray(i)).map((row) => {
        return (
          <View style={{ flexDirection: 'row' }}>
            {row.map((rowItem, pos) => <View style={{ flex: 1, alignItems: 'center' }}>
              {rowItem != '' && <Image source={require(pic)} style={styles.gridPhoto} />}
            </View>)}
          </View>
        )
      })}
    </View>
  )
}

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Bio />
      <Interests />
      <SocialLinks />
      <Photos />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 0,
    backgroundColor: colors.WHITE
  },
  profileImg: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    borderRadius: 100, 
    marginLeft: -10
  },
  appUsername: {
    color: colors.BLACK,
    fontSize: 21,
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginRight: 5,
    marginBottom: 0,
    textTransform: 'lowercase'
  },
  appAge: {
    color: colors.BLACK,
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '300',
    marginTop: -2
  },
  appLocation: {
    color: '#99AAB5',
    fontSize: 16,
    marginLeft: 5
  },
  bio: {
    color: colors.BLACK,
    fontSize: 15,
  },
  social: {
    color: '#99AAB5',
    fontSize: 18,
    marginLeft: 18
  },
  gridPhoto: {
    width: '100%',
    height: windowHeight / 7
  }
});


export default ProfileScreen