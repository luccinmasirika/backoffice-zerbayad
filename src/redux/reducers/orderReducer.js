import {LIST_ORDERS , LIST_ORDER} from '../types/ordersType'

export const ordersReducer = (state={orders:[],order:{}},action)=>{
    switch(action.type){
    case LIST_ORDERS :
        return{
            ...state,
          orders:action.payload,
        }

    case LIST_ORDER :
        return{
            ...state,
            order:action.payload,
        }
    default : return state;
    }
}