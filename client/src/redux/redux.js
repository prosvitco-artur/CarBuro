import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import globalReducer from "./GlobalReducer";
// import { reducer as formReducer } from 'redux-form';
import {product} from "./ProductReduser";
import { userReduser } from "./UserReduser";

let reducers = combineReducers({
    product,
    global: globalReducer,
    user: userReduser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;