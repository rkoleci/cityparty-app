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
    console.log(222, 'createProfileAction: ', p)
    return (dispatch) => {
        dispatch({
            type: 'CREATE_PROFILE_START'
        })
        axios({
            method: 'POST',
            url: `${constants.url}/profile/create`,
            headers: {
                token: p.token
            },
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

    function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);
    
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
    
        return new Blob([ia], {type:mimeString});
    }

    const blob = dataURItoBlob(p.image.uri)
    console.log(blob)

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
                'Content-Type': 'multipart/form-data;',
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlIiLCJyb2xlIjoiVVNFUiIsImlkIjo0LCJpYXQiOjE2MTQ4NTM3NTgsImV4cCI6MTYxNzQ0NTc1OH0.OdpKfZOJPaugORAjZodGKD4iWC5IdCKKrqsq6-q_0Gg'
            },
            data: data,
            body: data
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