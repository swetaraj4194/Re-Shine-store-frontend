// // import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
// import { apiUrl } from "../../config/constants";
// import axios from "axios";

// export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";
// export const SPACE_DETAILS_FETCHED = "SPACE_DETAILS_FETCHED";

// export const fetchSpacesSuccess = (spaces) => ({
//   type: FETCH_SPACES_SUCCESS,
//   payload: spaces,
// });

// const spaceDetailsFetched = (space) => ({
//   type: SPACE_DETAILS_FETCHED,
//   payload: space,
// });

// export const fetchSpaces = () => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await axios.get(`${apiUrl}/spaces`);

//       console.log(response.data);

//       dispatch(fetchSpacesSuccess(response.data));
//       //   dispatch(fetchSpacesSuccess(response.data.spaces.rows));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// };

// export const fetchSpaceById = (id) => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await axios.get(`${apiUrl}/spaces/${id}`);
//       console.log(response);
//       dispatch(spaceDetailsFetched(response.data.space));
//     } catch (e) {
//       console.log(e);
//     }
//   };
// };


// import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";


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


