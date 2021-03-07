import axios from 'axios'
import utils from '../utils'
import constants from '../../constants'

export const getCities = (p) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_CITIES_START'
        })
        axios({
            method: 'GET',
            url: `${constants.url}/city/search?city=${p.search}`, 
            headers: { 
                'token': p.token
            },
        }).then(r => {
            dispatch({
                type: 'GET_CITIES_SUCCESS',
                payload: r.data
            })
        }).catch(e => {
            dispatch({
                type: 'GET_CITIES_FAIL',
                payload: e
            })
        })
    }
}

export const getInterests = (p) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_INTERESTS_START'
        })
        axios({
            method: 'GET',
            url: `${constants.url}/interests`,  
        }).then(r => {
            dispatch({
                type: 'GET_INTERESTS_SUCCESS',
                payload: r.data
            })
        }).catch(e => {
            dispatch({
                type: 'GET_INTERESTS_FAIL',
                payload: e
            })
        })
    }
}