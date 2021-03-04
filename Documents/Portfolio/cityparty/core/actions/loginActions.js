import axios from 'axios'
import utils from '../utils'
import constants from '../../constants'

export const registerUser = (p) => {
    return (dispatch) => {
        dispatch({
            type: 'REGISTER_START'
        })
        axios({
            method: 'POST',
            url: `${constants.url}/users/register`,
            data: p
        }).then(r => {
            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: r.data
            })
        }).catch(e => {
            dispatch({
                type: 'REGISTER_FAIL',
                payload: e
            })
        })
    }
}

export const createProfile = (p) => {
    console.log(222, 'createProfile: ', p)
    return (dispatch) => {
        dispatch({
            type: 'CREATE_PROFILE_START'
        })
        axios({
            method: 'POST',
            url: `${constants.url}/profile/create`,
            data: p
        }).then(r => {
            dispatch({
                type: 'CREATE_PROFILE_SUCCESS',
                payload: r.data
            })
        }).catch(e => {
            dispatch({
                type: 'CREATE_PROFILE_FAIL',
                payload: e
            })
        })
    }
}

export const loginUser = (p) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_START'
        })
        axios({
            method: 'POST',
            url: `${constants.url}/users/login`,
            data: p
        }).then(r => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: r.data
            })
        }).catch(e => {
            dispatch({
                type: 'LOGIN_FAIL',
                payload: e
            })
        })
    }
}

export const getOwnUserInfo = (p) => {
    return (dispatch) => {
        dispatch({
            type: 'OWN_USER_INFO_START'
        })
        axios({
            method: 'POST',
            url: `${constants.url}/profile`,
            headers: {
                'token': p.token
            }
        }).then(r => {
            dispatch({
                type: 'OWN_USER_INFO_SUCCESS',
                payload: r.data
            })
        }).catch(e => {
            dispatch({
                type: 'OWN_USER_INFO_FAIL',
                payload: e
            })
        })
    }
}

export const getUserInfo = (p) => {
    return (dispatch) => {
        dispatch({
            type: 'USER_INFO_START'
        })
        axios({
            method: 'GET',
            url: `${constants.url}/users?user_id=${p.user_id}`,
            data: p
        }).then(r => {
            dispatch({
                type: 'USER_INFO_SUCCESS',
                payload: r.data
            })
        }).catch(e => {
            dispatch({
                type: 'USER_INFO_FAIL',
                payload: e
            })
        })
    }
}

export const uploadPhoto = (p) => {
    console.log(222, 'uploadPhoto: ', p)

    let data = new FormData();
    data.append('picture', p.image);

    return (dispatch) => {
        dispatch({
            type: 'UPLOAD_PHOTO_START'
        })
        axios({
            method: 'POST',
            url: `${constants.url}/upload/photo?type=profile_picture`,
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': p.token
            },
            data
        }).then(r => {
            dispatch({
                type: 'UPLOAD_PHOTO_SUCCESS',
                payload: r.data
            })
        }).catch(e => {
            dispatch({
                type: 'UPLOAD_PHOTO_FAIL',
                payload: e
            })
        })
    }
}