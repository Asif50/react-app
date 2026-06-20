
import { legacy_createStore as createStore, applyMiddleware} from 'redux';

import logger from "redux-logger"

import myReducer from "../reducers/myReducer";

let myReduxStore = createStore(myReducer, applyMiddleware(logger));

export default myReduxStore
