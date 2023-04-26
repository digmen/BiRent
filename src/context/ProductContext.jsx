import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, BASE_URL } from '../../src/utils/const';
import $axios from '../utils/axios';
import axios from 'axios';

export const productContext = createContext();

export function useProductContext() {
  return useContext(productContext);
}

const initState = {
  products: [],
  oneProduct: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.categories:
      return { ...state, categories: action.payload };
    case ACTIONS.oneProduct:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    try {
      const { data } = await axios.get(`${BASE_URL}/apartment/`);
      console.log(data);
      dispatch({
        type: ACTIONS.products,
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(slug) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/apartment/${slug}/`);
      dispatch({
        type: ACTIONS.oneProduct,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    getProducts,
    getOneProduct,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
