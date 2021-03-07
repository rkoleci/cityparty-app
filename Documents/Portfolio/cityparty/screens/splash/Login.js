import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { StyleSheet, View, Text, Image } from 'react-native'

import { ViewWrapper, Input, MainBtn, WhiteBtn, Loading } from '../../common'
import { loginUser } from '../../core/actions/loginActions'
import utils from '../../core/utils'
import colors from '../../colors'

const LoginScreen = ({ navigation, loginUser }) => {

  const [data, setData] = useState({})
  const [error, setError] = useState({})
  const [status, setStatus] = useState({ status: '', result: '' })

  const login = useSelector(state => state.login)

  useEffect(() => {
    const { loggingIn, loggedIn, data, errored, error } = login

    if (loggingIn) {
      setStatus({ status: 'loading', result: '' })
      return
    }

    if (loggedIn && data && data.success == false && data.result) {
      setStatus({ status: 'result', result: data.result })
      return
    }

    if (loggedIn && data && data.success == true && data.token) {
      navigation.navigate('CreateProfile', { token: data.token });
      setStatus({ status: '', result: '' })
      setData({})
      setError({})
      return
    }

    if (errored && error) {
      setStatus({ status: 'result', result: 'Something went wrong!' })
      return
    }

  }, [login])

  useEffect(() => {
    setStatus({ status: '', result: '' })
  }, [data])

  const onLogin = () => {

    setError({})

    if (!data['email']) {
      setError({ field: 'email', message: 'Fill in email!' })
      return
    }
    if (!data['password']) {
      setError({ field: 'password', message: 'Fill in password!' })
      return
    }

    loginUser({
      email: data.email,
      password: data.password
    })

  }

  return (
    <ViewWrapper styles={style.container}>
      <View style={{ flex: 1.2, justifyContent: 'flex-end' }}>
        <Image style={style.logo} source={require('../../assets/logo/logo_normal.png')} />
        <Text style={style.text}>Cityparty</Text>
      </View>
      <View style={{ flex: 2, flexDirection: 'column' }} >
        <Input field={"email"} error={error} placeholder={'EMAIL'} value={data['email']} onChange={e => setData({ ...data, ['email']: e })} styles={style.input} errorVisible />
        <Input field={"password"} error={error} placeholder={'PASSWORD'} value={data['password']} secureTextEntry onChange={e => setData({ ...data, ['password']: e })} styles={style.input} errorVisible/>
        <View style={{ flex: 0.5 }} />
        <Loading status={status.status} result={status.result}>
          <MainBtn title="Login" type="red" style={style.login} onClick={() => onLogin()} />
        </Loading>
        <View style={{ flex: 0.5 }} />
        <Text style={style.forgot}>forgot password?</Text>
        <View style={{ flex: 1 }} />
        <Text style={style.account}>don't have an account yet?</Text>
        <WhiteBtn title="Register" style={style.register} onClick={() => navigation.navigate('Register')} />
        <View style={{ flex: 0.7 }} />
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
    fontSize: 34,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: "Roboto",
    fontWeight: '700'
  },
  input: {
    marginBottom: 0
  },
  narrowView: {
    width: '90%',
    marginLeft: 10,
  },
  checkContainer: {
    flexDirection: 'row',
  },
  checkbox: {

  },
  checkText: {
    color: colors.BLACK,
    fontSize: 12,
    marginTop: 5,
  },
  checkDescription: {
    color: '#99AAB5',
    fontSize: 12,
  },
  login: {
    width: '50%',
    alignSelf: 'center',
  },
  forgot: {
    textAlign: 'center',
    color: colors.RED,
    fontSize: 14,

    fontFamily: "Roboto",
    fontWeight: '300'
  },
  account: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#99AAB5',
    fontSize: 15,

    fontFamily: "Roboto",
    fontWeight: '300'
  },
  register: {
  }
});


export default connect(null, (dispatch) => {
  return {
    loginUser: p => dispatch(loginUser(p))
  }
})(LoginScreen)