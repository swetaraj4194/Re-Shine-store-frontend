import { FETCH_PRODUCTS_SUCCESS, POST_REVIEW } from "./actions";
import { FETCH_CATEGORY_SUCCESS } from "./actions";
import { FETCH_DETAILS_SUCCESS } from "./actions";
import { FETCH_SELLER_DETAILS } from "./actions";
import { POST_BID_AMOUNT } from "./actions";
export { POST_REVIEW } from "./actions";

const initialState = {
  categoryDetails: [],
  allProducts: [],
  productDetails: null,
  sellerDetails: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //fectch all products
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, allProducts: action.payload };

    //fecting data by category
    case FETCH_CATEGORY_SUCCESS:
      return { ...state, categoryDetails: { ...action.payload } };

    //fetch details
    case FETCH_DETAILS_SUCCESS:
      return { ...state, productDetails: { ...action.payload } };

    //fetching seller detail
    case FETCH_SELLER_DETAILS:
      return { ...state, sellerDetails: { ...action.payload } };

    //posting bid amount
    case POST_BID_AMOUNT:
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          bids: [...state.productDetails.bids, action.payload],
        },
      };

    //posting review
    case POST_REVIEW:
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          reviews: [...state.productDetails.reviews, action.payload],
        },
      };

    default:
      return state;
  }
}
