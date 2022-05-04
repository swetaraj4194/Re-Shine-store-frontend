import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectUser } from "./selectors";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const USER_UPDATED = "USER_UPDATED";
export const LOG_OUT = "LOG_OUT";
export const PRODUCT_POST_SUCCESS = "PRODUCT_POST_SUCCESS";
export const PRODUCT_DELETE_SUCCESS = "PRODUCT_DELETE_SUCCESS";
export const BID_DELETE_SUCCESS = "BID_DELETE_SUCCESS";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

//action for user signup:
export const signUp = (name, email, password, phone) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
        phone,
      });
      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
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

// action for user login:
export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
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

// action to get user with stored token:
export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    console.log("in bootstraping");
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Save this information (the user + space) to the store, just like you do in login
      // console.log("res", response);
      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

//action for adding product
export const productPostSuccess = (item) => ({
  type: PRODUCT_POST_SUCCESS,
  payload: item,
});

export const postProduct = (
  title,
  description,
  price,
  mainImage,
  status,
  categoryId,
  minimumBid,
  images
) => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());
      console.log("token", token);

      dispatch(appLoading());

      const response = await axios.post(
        `${apiUrl}/products/new`,
        {
          title,
          categoryId,
          minimumBid,
          mainImage,
          status,
          images,

          description,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Yep!", response.data);
      dispatch(showMessageWithTimeout("sucess", true, "product added", 1500));

      dispatch(productPostSuccess(response.data.product));
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

///product delete
export const productDeleteSuccess = (id) => ({
  type: PRODUCT_DELETE_SUCCESS,
  payload: id,
});

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { token } = selectUser(getState());

    //console.log(id);

    try {
      const response = await axios.delete(`${apiUrl}/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Product deleted?", response);

      dispatch(productDeleteSuccess(id));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};

//action for editing user personal details
export const userUpdate = (user) => ({
  type: USER_UPDATED,
  payload: user,
});

export const updateUser = (name, email, phone, id) => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());
      dispatch(appLoading());
      console.log(name, email, phone, id);

      const response = await axios.patch(
        `${apiUrl}/products/${id}`,
        {
          name,
          email,
          phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log("update", response.data);

      dispatch(
        showMessageWithTimeout("success", false, "update successfull", 3000)
      );
      dispatch(userUpdate(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

///Bid delete
export const bidDeleteSuccess = (id) => {
  console.log("payload", id);
  return {
    type: BID_DELETE_SUCCESS,
    payload: id,
  };
};

export const deleteBid = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { token } = selectUser(getState());

    //console.log(id);

    try {
      const response = await axios.delete(`${apiUrl}/products/bid/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //console.log("Product deleted?", response);

      dispatch(bidDeleteSuccess(id));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};
