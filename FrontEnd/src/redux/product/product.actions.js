import {  GET_PRODUCT } from "./product.types";

import axios from "axios";




export const getProducts = (url,creds) => async (dispatch) => {
  try{
    const { data } = await axios.post(url,creds);
  return dispatch({
    type: GET_PRODUCT,
    payload: data,
  });
  }
  catch({response:{data:{message}}}){
    console.log(message);
    alert({
      icon: 'error',
      title:message
    })
  }
};