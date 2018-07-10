import { ADD_USER } from '../actions/types';
import { KEEP_USER } from '../actions/actions';


const initialState = {
    token: "",
    userName: "",
    authenticated: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_USER:
            if (action.payload.data.success) {
                let newState = state;
                newState.token = action.payload.data.token;
                newState.userName = action.payload.username;
                newState.authenticated = true;
                return newState;
            }
            break;

        case KEEP_USER:
            let newState = state;
            newState.userName = action.payload;
            newState.authenticated = true;
            return newState;
        default:
            return initialState;
    }
}

export default rootReducer;
