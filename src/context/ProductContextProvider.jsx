import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/helpers";
import axios from "axios";

export const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCTS_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addProduct(newProduct) {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts();
  }

  async function getProducts() {
    const { data } = await axios(
      `${JSON_API_PRODUCTS}/${window.location.search}`
    );
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  }

  async function getProductDetails(id) {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS_DETAILS,
      payload: data,
    });
  }
  async function saveEditedProduct(newProduct, id) {
    await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newProduct);
    getProducts();
  }
  const values = {
    // fetchByParams,
    addProduct,
    products: state.products,
    getProducts,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    // deleteProduct,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
