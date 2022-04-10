import { FETCH_SPACES_SUCCESS, SPACE_DETAILS_FETCHED } from "./actions";
// import { SPACE_UPDATED } from "../user/actions";

const initialState = { allSpaces: [], spaceDetails: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case FETCH_SPACES_SUCCESS:
      return { ...state, allSpaces: [...state.allSpaces, ...action.payload] };
      

    case SPACE_DETAILS_FETCHED:
      return { ...state, spaceDetails: { ...action.payload } };
    default:
      return state;
  }
}

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
