import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectUser } from "./selectors";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

import myAxios from "../../axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const SPACE_UPDATED = "SPACE_UPDATED";
export const LOG_OUT = "LOG_OUT";
export const STORY_POST_SUCCESS = "STORY_POST_SUCCESS";
export const STORY_DELETE_SUCCESS = "STORY_DELETE_SUCCESS";

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

export const storyPostSuccess = (story) => ({
  type: STORY_POST_SUCCESS,
  payload: story,
});

export const storyDeleteSuccess = (storyId) => ({
  type: STORY_DELETE_SUCCESS,
  payload: storyId,
});


export const spaceUpdated = (space) => ({
  type: SPACE_UPDATED,
  payload: space,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
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

export const postStory = (name, content, imageUrl) => {
  return async (dispatch, getState) => {
    try {
      const { space, token } = selectUser(getState());
      // console.log(name, content, imageUrl);
      dispatch(appLoading());

      const response = await axios.post(
        `${apiUrl}/spaces/${space.id}/stories`,
        {
          name,
          content,
          imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log("Yep!", response);
      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      dispatch(storyPostSuccess(response.data.story));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

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

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
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
      console.log("res", response);
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

//updating space 

export const updateMySpace = (title, description, backgroundColor, color) => {
  return async (dispatch, getState) => {
    try {
      const { space, token } = selectUser(getState());
      dispatch(appLoading());

      const response = await axios.patch(
        `${apiUrl}/spaces/${space.id}`,
        {
          title,
          description,
          backgroundColor,
          color,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("update",response.data);

      dispatch(
        showMessageWithTimeout("success", false, "update successfull", 3000)
      );
      dispatch(spaceUpdated(response.data.space));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};



//delete story
export const deleteStory = (storyId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { space, token } = selectUser(getState());
    const spaceId = space.id;
    // make an axios request to delete
    // and console.log the response if success
    try {
      const response = await myAxios.delete(
        `${apiUrl}/spaces/${spaceId}/stories/${storyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Story deleted?", response.data);

      dispatch(storyDeleteSuccess(storyId));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};
