// import { FETCH_SPACES_SUCCESS, SPACE_DETAILS_FETCHED } from "./actions";
// // import { SPACE_UPDATED } from "../user/actions";

// const initialState = { allSpaces: [], spaceDetails: null };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {

//     case FETCH_SPACES_SUCCESS:
//       return { ...state, allSpaces: [...state.allSpaces, ...action.payload] };

//     case SPACE_DETAILS_FETCHED:
//       return { ...state, spaceDetails: { ...action.payload } };
//     default:
//       return state;
//   }
// }

// case SPACE_UPDATED: {
//   return {
//     ...state,
//     allSpaces: state.allSpaces.map((space) => {
//       if (space.id !== action.payload.id) {
//         return space;
//       } else {
//         return { ...action.payload, stories: [...space.stories] };
//       }
//     }),
//   };
// }

import { FETCH_PRODUCTS_SUCCESS } from "./actions";
import { FETCH_CATEGORY_SUCCESS } from "./actions";
import { FETCH_DETAILS_SUCCESS } from "./actions";

const initialState = {
  categoryDetails: [],
  allProducts: [],
  productDetails: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, allProducts: action.payload };

    case FETCH_CATEGORY_SUCCESS:
      return { ...state, categoryDetails: { ...action.payload } };

    case FETCH_DETAILS_SUCCESS:
      return { ...state, productDetails: { ...action.payload } };
    default:
      return state;
  }
}
