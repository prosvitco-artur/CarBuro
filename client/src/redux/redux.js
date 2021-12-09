import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import globalReducer from "./GlobalReducer";
import {CategoryReducer} from "./CategoryReduser";
import { userReduser } from "./UserReduser";

let reducers = combineReducers({
    categories: CategoryReducer,
    global: globalReducer,
    user: userReduser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;