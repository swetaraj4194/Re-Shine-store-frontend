import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";
import {
  appDoneLoading,
  appLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";
export const FETCH_SELLER_DETAILS = "FETCH_SELLER_DETAILS";
export const POST_BID_AMOUNT = "POST_BID_AMOUNT";
export const POST_REVIEW = "POST_REVIEW";

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

//posting bid amount using (product post success action)
export const productBidSuccess = (amount) => ({
  type: POST_BID_AMOUNT,
  payload: amount,
});

export const postBidAmount = (id, amount) => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());

      // console.log("token",token)

      dispatch(appLoading());

      const response = await axios.post(
        `${apiUrl}/products/bids/${id}`,
        {
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log("Bid", response);
      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );

      dispatch(productBidSuccess(response.data.newBid));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

//action for posting comments
export const productReview = (comments) => ({
  type: POST_REVIEW,
  payload: comments,
});
export const postComments = (id, review) => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());

      // console.log("token",token)

      dispatch(appLoading());

      const response = await axios.post(
        `${apiUrl}/products/comment/${id}`,
        {
          review,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      dispatch(productReview(response.data.newReview));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
