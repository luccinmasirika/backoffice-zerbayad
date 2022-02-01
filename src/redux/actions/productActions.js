import axios from 'axios';

import { URL } from "../../config/url";
import {LIST_PRODUCTS} from '../types/productsType'


export const getProducts = () => async (dispatch) => {
    // console.log(userEmail,userPassword)
    console.log('entred in getPRoducets')
    const products = await axios.get(`${URL}/api/v1/products/`);
    dispatch({ type: LIST_PRODUCTS, payload: products.data });
    //console.log("userInfo.data",userInfo.data);
    //localStorage.removeItem('userInfo');
    //localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
    return products.data
  };