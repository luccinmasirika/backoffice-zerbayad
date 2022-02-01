import {LIST_ORDERS} from '../types/ordersType'

export const ordersReducer = (state={orders:[]},action)=>{
    switch(action.type){
    case LIST_ORDERS :
        return{
            ...state,
          orders:action.payload,
        }
    default : return state;
    }
}