export function cities(state = {
    loading: false,
    loaded: false,
    errored: false,
    error: null,
    data: null,
}, action) {
    switch (action.type) {
        case 'GET_CITIES_START':
            return { ...state, loading: true }
        case 'GET_CITIES_SUCCESS':
            return { ...state, loading: false, loaded: true, data: action.payload }
        case 'GET_CITIES_FAIL':
            return { ...state, loading: false, loaded: false, errored: true, error: action.payload }
        default:
            return state
    }
}

export function interests(state = {
    loading: false,
    loaded: false,
    errored: false,
    error: null,
    data: null,
}, action) {
    switch (action.type) {
        case 'GET_INTERESTS_START':
            return { ...state, loading: true }
        case 'GET_INTERESTS_SUCCESS':
            return { ...state, loading: false, loaded: true, data: action.payload }
        case 'GET_INTERESTS_FAIL':
            return { ...state, loading: false, loaded: false, errored: true, error: action.payload }
        default:
            return state
    }
}