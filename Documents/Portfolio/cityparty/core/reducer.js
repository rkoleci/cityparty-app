import {combineReducers} from 'redux'

import{startupReducer} from './reducers'
import { login, register, userInfo, createProfile, ownUserInfo, uploadPhoto } from './reducers/loginReducer'
import { cities, interests } from './reducers/city'

const appReducer = combineReducers({
    startupReducer,
    login,
    register,
    userInfo,
    createProfile,
    ownUserInfo,
    uploadPhoto,
    cities,
    interests
})

export default appReducer 