import {applyMiddleware, combineReducers} from 'redux'
import {legacy_createStore as createStore} from 'redux'
import { subNavReducer } from '../reducers/subNavReducer';


// configure redux-thunk
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { coursesReducer } from '../reducers/listCourses';
import { quanLyLogin } from '../reducers/quanLyLogin';
import { thongTinTaiKhoan } from '../reducers/thongTinTaiKhoan';
// import { modalReducer } from './reducers/modalReducer';

const rootReducer = combineReducers ({
    subNavReducer,
    coursesReducer,
    quanLyLogin,
    thongTinTaiKhoan,
})

const middleware = [
    reduxThunk,
];
const customCompose = composeWithDevTools(applyMiddleware(...middleware))

export const store  = createStore(rootReducer, customCompose );

// export const store = createStore(rootReducer,applyMiddleware(reduxThunk))