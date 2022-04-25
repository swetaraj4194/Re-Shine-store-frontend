import { FETCH_PRODUCTS_SUCCESS } from "./actions";
import { FETCH_CATEGORY_SUCCESS } from "./actions";
import { FETCH_DETAILS_SUCCESS } from "./actions";
import { FETCH_SELLER_DETAILS } from "./actions";

const initialState = {
  categoryDetails: [],
  allProducts: [],
  productDetails: null,
  sellerDetails: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, allProducts: action.payload };

    case FETCH_CATEGORY_SUCCESS:
      return { ...state, categoryDetails: { ...action.payload } };

    case FETCH_DETAILS_SUCCESS:
      return { ...state, productDetails: { ...action.payload } };

    case FETCH_SELLER_DETAILS:
      return { ...state, sellerDetails: { ...action.payload } };

    default:
      return state;
  }
}
