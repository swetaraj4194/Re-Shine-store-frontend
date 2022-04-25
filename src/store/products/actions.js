import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";
export const FETCH_SELLER_DETAILS = "FETCH_SELLER_DETAILS";

//action for all products dispaly
export const fetchProductsSuccess = (items) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: items,
});

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products`);

      // console.log("data",response.data);

      dispatch(fetchProductsSuccess(response.data));
      //   dispatch(fetchSpacesSuccess(response.data.spaces.rows));
    } catch (e) {
      console.log(e.message);
    }
  };
};

//action for displaying product category wise
export const fetchCategorySuccess = (items) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: items,
});

export const fetchCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products/category/${id}`);

      // console.log("data", response.data);

      dispatch(fetchCategorySuccess(response.data.category));
      //   dispatch(fetchSpacesSuccess(response.data.spaces.rows));
    } catch (e) {
      console.log(e.message);
    }
  };
};

//action to display  product details

const productDetailsFetched = (item) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: item,
});

export const fetchProductsById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products/${id}`);
      // console.log(response);
      dispatch(productDetailsFetched(response.data.product));
    } catch (e) {
      console.log(e);
    }
  };
};

//action for displaying seller details to buy product

const sellerDetailsFetched = (item) => ({
  type: FETCH_SELLER_DETAILS,
  payload: item,
});

export const fetchSellerById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products/buy/${id}`);
      // console.log(response);
      dispatch(sellerDetailsFetched(response.data.product));
    } catch (e) {
      console.log(e);
    }
  };
};
