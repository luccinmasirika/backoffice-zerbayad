import axios from 'axios';

import { URL } from "../../config/url";
import {LIST_PRODUCTS} from '../types/productsType'


export const getProducts = (index,limit) => async (dispatch) => {
    // console.log(userEmail,userPassword)
    
    const products = await axios.get(`${URL}/products/azgarden/${index}/${limit}`);
    dispatch({ type: LIST_PRODUCTS, payload: products.data });
    //console.log("userInfo.data",userInfo.data);
    //localStorage.removeItem('userInfo');
    //localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
    return products.data
  };