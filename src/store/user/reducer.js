import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  PRODUCT_POST_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  BID_DELETE_SUCCESS,
  USER_UPDATED,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  id: null,
  name: null,
  email: null,
  phone: null,
  product: [],
  bid: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //Login
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    //Logout
    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    //Post Bid
    case PRODUCT_POST_SUCCESS:
      return {
        ...state,
        product: [...state.product, { ...action.payload }],
      };

    //Delete my products
    case PRODUCT_DELETE_SUCCESS:
      const id = action.payload;
      const newProducts = state.product.filter((product) => product.id !== id);
      return {
        ...state,
        product: newProducts,
      };

    //Delete bid
    case BID_DELETE_SUCCESS:
      const bidId = action.payload;
      const newBids = state.bid.filter((bid) => bid.id !== bidId);
      return {
        ...state,
        bid: newBids,
      };

    //update user profile
    case USER_UPDATED:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default reducer;
