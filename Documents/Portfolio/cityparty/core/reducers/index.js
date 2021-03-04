export function startupReducer(state = {
    data: {
        profile_icon: '',
        has_unread_message: false
    },
}, action) {
    switch (action.type) {
        case 'START_UP':
            return { ...state, data: action.payload }
        case 'NEW_MESSAGE':
            return { ...state, data: { ...state.data, has_unread_messages: true } }
        default:
            return state
    }
}

