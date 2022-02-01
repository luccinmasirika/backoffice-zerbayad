import { URL } from "../../config/url";
import { LIST_ORDERS } from "../types/ordersType";
import axios from 'axios'


export const listOrders = () => async (dispatch) => {
console.log('entred list order')
const orders = await axios.get(`${URL}/orders/azgarden`);
dispatch({ type: LIST_ORDERS, payload: orders.data });
//console.log("userInfo.data",userInfo.data);
//localStorage.removeItem('userInfo');
//localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
return orders.data
};