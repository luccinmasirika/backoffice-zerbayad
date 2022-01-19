import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'
//import { cartReducer } from './reducers/cartReducer';
import { productsReducer } from './reducers/productReducer';


const initialState = {
products:{
    
},


}

const reducers = combineReducers({
    products : productsReducer,
    
    })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducers,initialState,composeEnhancer(applyMiddleware(thunk)));

export default Store ;