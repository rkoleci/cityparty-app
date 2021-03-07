import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { StyleSheet, View, Text, Image } from 'react-native'
import CheckBox from 'react-native-check-box'
import { RadioButton } from 'react-native-paper';

import { ViewWrapper, Input, MainBtn, Loading } from '../../common'
import colors from '../../colors'
import { registerUser } from '../../core/actions/loginActions'

const Question = ({ text, description, onCheck, value }) => {
  return (
    <View style={style.checkContainer}>
      <CheckBox
        isChecked={value}
        onClick={e => onCheck(!value)}
        style={style.checkbox}
        tintColors={{ true: colors.BLACK }}
      />
      <View style={{ width: '90%' }}>
        <Text style={style.checkText}>{text}</Text>
        <Text style={style.checkDescription}>{description}</Text>
      </View>
    </View>
  )
}

const RegisterScreen = ({ navigation, registerUser }) => {

  useEffect(() => {
    navigation.setOptions({ title: '', headerShown: true })
  }, [])

  const [data, setData] = useState({ male: 'unchecked', female: 'checked', })
  const [error, setError] = useState({})
  const [status, setStatus] = useState({ status: '', result: '' })

  const register = useSelector(state => state.register)

  useEffect(() => {
    console.log(333, 'register ', register)

    const { registering, registered, data, errored, error } = register

    if (registering) {
      setStatus({ status: 'loading', result: '' }) 
      return
    }

    if (registered && data && data.success == true) {
      navigation.navigate('Login');
      setStatus({ status: '', result: '' })
      setData({})
      setError({})
      return
    }

    if (registered && data && data.success == false) {
      if (data.result != '') {
        setStatus({ status: 'result', result: data.result })
        return
      }
    }

    if (errored && error) {
      if (data && data.success == false && data.result) {
        setStatus({ status: 'result', result: data.result })
      } else {
        setStatus({ status: 'result', result: 'Something went wrong!' })
      } 
      return
    }

  }, [register])

  useEffect(() => {
    setStatus({ status: '', result: '' })
  }, [data])

  const onRegister = () => { 

    setError({})

    if (!data['email']) {
      setError({ field: 'email', message: 'Fill in email!' })
      return
    }
    if (!data['name']) {
      setError({ field: 'name', message: 'Fill in name!' })
      return
    }
    if (!data['password']) {
      setError({ field: 'password', message: 'Fill in password!' })
      return
    }

    registerUser({
      email: data.email,
      password: data.password,
      username: data.name,
      gender: data.male == 'checked' ? 'M' : 'F'
    })

  }

  const onSexChange = (k) => {
    if (k == 'male') {
      setData({ ...data, male: data.male == 'checked' ? 'unchecked' : 'checked', female: data.male == 'checked' ? 'checked' : 'unchecked' })
    }

    if (k == 'female') {
      setData({ ...data, female: data.female == 'checked' ? 'unchecked' : 'checked', male: data.female == 'checked' ? 'checked' : 'unchecked' })
    }
  }

  return (
    <ViewWrapper styles={style.container}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Image style={style.logo} source={require('../../assets/logo/logo_normal.png')} />
        <Text style={style.text}>Cityparty</Text>
      </View>
      <View style={{ flex: 2.1, flexDirection: 'column' }}>
        <View style={style.inputContainer}>
          <Input field={"email"} error={error} placeholder={'EMAIL'} value={data['email']} onChange={e => setData({ ...data, ['email']: e })} styles={style.input} errorVisible />
          <Input field={"name"} error={error} placeholder={'NAME SURNAME'} value={data['name']} onChange={e => setData({ ...data, ['name']: e })} styles={style.input} errorVisible />
          <Input field={"password"} error={error} placeholder={'PASSWORD'} value={data['password']} secureTextEntry onChange={e => setData({ ...data, ['password']: e })} styles={style.input} errorVisible />
        </View>
        <View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'center', width: '80%', alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row', flex: 1, }}>
            <RadioButton
              status={data['female']}
              onPress={() => onSexChange('female')}
              color={'#99AAB5'}
            />
            <Text style={style.sex}>Female</Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <RadioButton
              status={data['male']}
              onPress={() => onSexChange('male')}
              color={'#99AAB5'}
            />
            <Text style={style.sex}>Male</Text>
          </View>
        </View>
        <View style={{ flex: 0.3 }} />
        <View style={style.narrowView}>
          <Question value={data['terms']} onCheck={(e) => setData({ ...data, ['terms']: e })} text="by clicking REGISTER you accept our terms and conditions" description="" />
          <Question value={data['age']} onCheck={(e) => setData({ ...data, ['age']: e })} text="i am 18 years old" description="(please, if you are less than 18 years old don’t register on Cityparty app)" />
        </View>
        <View style={{ flex: 0.3 }} />
        <Loading status={status.status} result={status.result}>
          <MainBtn title="Register" type="red" style={{ width: '80%', alignSelf: 'center' }} onClick={() => onRegister()} />
        </Loading>
        <View style={{ flex: 0.3 }} />
      </View>
    </ViewWrapper>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 35
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
  }, 
  input: {
    marginBottom: 0
  },
  narrowView: {
    width: '95%',
    alignSelf: 'center',
  },
  checkContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 5
  },
  checkText: {
    color: colors.BLACK,
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '600'
  },
  checkDescription: {
    color: '#99AAB5',
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400'
  },
  sex: {
    marginTop: 7
  }
});

export default connect(null, (dispatch) => {
  return {
    registerUser: p => dispatch(registerUser(p))
  }
})(RegisterScreen)