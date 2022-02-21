import { URL } from "../../config/url";
import { LIST_ORDERS ,LIST_ORDER } from "../types/ordersType";
import axios from 'axios'


export const listOrders = (index,limit) => async (dispatch) => {
const orders = await axios.get(`${URL}/orders/getorders/azgarden/${index}/${limit}`);
dispatch({ type: LIST_ORDERS, payload: orders.data });
//console.log("userInfo.data",userInfo.data);
//localStorage.removeItem('userInfo');
//localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
return orders.data
};


export const getOrder = (id) => async (dispatch) => {
    const order = await axios.get(`${URL}/orders/getorder/azgarden/${id}`);
    dispatch({ type: LIST_ORDER, payload: order.data });
    //console.log("userInfo.data",userInfo.data);
    //localStorage.removeItem('userInfo');
    //localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
    return order.data
    };