import {  GET_PRODUCT } from "./product.types";

const initState = {
  loading: false,
  error: false,
  data: {},
};
export const productReducer = (
  state = initState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    
    default: {
      return state;
    }
  }
};