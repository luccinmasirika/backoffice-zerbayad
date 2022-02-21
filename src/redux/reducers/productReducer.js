import { LIST_PRODUCTS, GET_PRODUCT } from '../types/productsType'

export const productsReducer = (state = { products: [], product: {} }, action) => {
    switch (action.type) {
        case LIST_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case GET_PRODUCT:
            return {
                ...state, product: action.payload
            }
        default: return state;
    }

}