import axios from 'axios'
import utils from '../utils' 

export const startUp = () => {
    return (dispatch) => {
        dispatch({
            type: 'START_UP',
            payload: {
                profile_icon: utils.getProfileIcon(),
                has_unread_messages: utils.hasUnreadMessages()
            }
        })
    }
}

export const newMessage = () => {
    return (dispatch) => {
        dispatch({
            type: 'NEW_MESSAGE'
        })
    }
}
