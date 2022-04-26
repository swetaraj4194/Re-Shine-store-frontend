import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  PRODUCT_POST_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  USER_UPDATED,
  POST_BID_AMOUNT,
  POST_REVIEW,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  id: null,
  name: null,
  email: null,
  phone: null,
  product: [],
  bid: [],
  review: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case PRODUCT_POST_SUCCESS:
      return {
        ...state,
        product: { ...action.payload },
      };

    case PRODUCT_DELETE_SUCCESS:
      const id = action.payload;
      const newProducts = state.product.filter((product) => product.id !== id);
      return {
        ...state,
        product: newProducts,
      };

    case USER_UPDATED:
      return { ...state, ...action.payload };

    case POST_BID_AMOUNT:
      return {
        ...state,
        bid: [...state.bid, action.payload],
      };

    case POST_REVIEW:
      return {
        ...state,
        review: [...state.review, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
