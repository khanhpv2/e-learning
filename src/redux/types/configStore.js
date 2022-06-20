import {applyMiddleware, combineReducers} from 'redux'
import {legacy_createStore as createStore} from 'redux'
// configure redux-thunk
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
// import { modalReducer } from './reducers/modalReducer';

const rootReducer = combineReducers ({

})

const middleware = [
    reduxThunk,
];
const customCompose = composeWithDevTools(applyMiddleware(...middleware))

export const store  = createStore(rootReducer, customCompose );

// export const store = createStore(rootReducer,applyMiddleware(reduxThunk))