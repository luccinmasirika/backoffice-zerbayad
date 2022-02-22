import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
//import { cartReducer } from './reducers/cartReducer';
import { productsReducer } from './reducers/productReducer';
import { ordersReducer } from './reducers/orderReducer';
import { darkModeReducer } from './reducers/darkModeReducer';

const initialState = {
    products: {
        product: {},
    },
    orders: {
        order: {}
    },
}

const reducers = combineReducers({
    products: productsReducer,
    orders: ordersReducer,
    themeMode: darkModeReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)));

export default Store;