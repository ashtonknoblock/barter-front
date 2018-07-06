import { createStore } from 'redux';
import rootReducer from './reducers'

// const initialState = {
//     username: "",
//     token: "",
//     authenticated: false,
// };


let store = createStore(
    rootReducer, 
    // initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log('store changed', store.getState())
})

export default store;