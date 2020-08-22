import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import goodsReducer from "./goods-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    goodsPage: goodsReducer
})



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store