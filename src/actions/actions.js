export const ADD_USER = "ADD_USER";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const KEEP_USER = "KEEP_USER";


export const addUser = (authData) => {
    return {
        type: ADD_USER,
        payload: authData, //comes from login, should be username and authenticated = true
    }
}

export const keepUser = (userInfo) => {
    return {
        type: KEEP_USER,
        payload: userInfo
    }
}




