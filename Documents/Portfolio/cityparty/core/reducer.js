import {combineReducers} from 'redux'

import{startupReducer} from './reducers'
import { login, register, userInfo, creteProfile, ownUserInfo, uploadPhoto } from './reducers/loginReducer'

const appReducer = combineReducers({
    startupReducer,
    login,
    register,
    userInfo,
    creteProfile,
    ownUserInfo,
    uploadPhoto
})

export default appReducer