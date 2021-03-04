export function login(state = {
    loggingIn: false,
    loggedIn: false,
    errored: false,
    error: null,
    data: null,
}, action) {
    switch (action.type) {
        case 'LOGIN_START':
            return { ...state, loggingIn: true }
        case 'LOGIN_SUCCESS':
            return { ...state, loggingIn: false, loggedIn: true, data: action.payload }
        case 'LOGIN_FAIL':
            return { ...state, loggingIn: false, loggedIn: false, errored: true, error: action.payload }
        default:
            return state
    }
}

export function register(state = {
    registering: false,
    registered: false,
    errored: false,
    error: null,
    data: null,
}, action) {
    switch (action.type) {
        case 'REGISTER_START':
            return { ...state, registering: true }
        case 'REGISTER_SUCCESS':
            return { ...state, registering: false, registered: true, data: action.payload }
        case 'REGISTER_FAIL':
            return { ...state, registering: false, registered: false, errored: true, error: action.payload }
        default:
            return state
    }
}

export function creteProfile(state = {
    creating: false,
    created: false,
    errored: false,
    error: null,
    data: null,
}, action) {
    switch (action.type) {
        case 'CREATE_PROFILE_START':
            return { ...state, creating: true }
        case 'CREATE_PROFILE_SUCCESS':
            return { ...state, creating: false, created: true, data: action.payload }
        case 'CREATE_PROFILE_FAIL':
            return { ...state, registering: false, created: false, errored: true, error: action.payload }
        default:
            return state
    }
}

export function userInfo(state = {
    loading: false,
    loaded: false,
    errored: false,
    error: null,
    data: null,
}, action) {
    switch (action.type) {
        case 'USER_INFO_START':
            return { ...state, loading: true }
        case 'USER_INFO_SUCCESS':
            return { ...state, loading: false, loaded: true, data: action.payload }
        case 'USER_INFO_FAIL':
            return { ...state, loading: false, loaded: false, errored: true, error: action.payload }
        default:
            return state
    }
}

export function ownUserInfo(state = {
    loading: false,
    loaded: false,
    errored: false,
    error: null,
    data: null,
}, action) {
    switch (action.type) {
        case 'OWN_USER_INFO_START':
            return { ...state, loading: true }
        case 'OWN_USER_INFO_SUCCESS':
            return { ...state, loading: false, loaded: true, data: action.payload }
        case 'OWN_USER_INFO_FAIL':
            return { ...state, loading: false, loaded: false, errored: true, error: action.payload }
        default:
            return state
    }
}

export function uploadPhoto(state = {
    uploading: false,
    uploaded: false,
    errored: false,
    error: null,
    data: null,
}, action) {
    switch (action.type) {
        case 'OWN_USER_INFO_START':
            return { ...state, uploading: true }
        case 'OWN_USER_INFO_SUCCESS':
            return { ...state, uploading: false, uploaded: true, data: action.payload }
        case 'OWN_USER_INFO_FAIL':
            return { ...state, uploading: false, uploaded: false, errored: true, error: action.payload }
        default:
            return state
    }
}