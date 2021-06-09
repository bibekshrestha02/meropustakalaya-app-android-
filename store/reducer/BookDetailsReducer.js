import {
  FETCHBOOKDETAILS,
  ADDBOOKREVIEW,
  DELETEBOOKREVIEW,
} from '../constant/BookDetailsConstant';
const initialState = {};

const bookDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHBOOKDETAILS:
      state = action.payload.data;
      return state;
    case ADDBOOKREVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload.review],
        userReview: action.payload.review,
      };
    case DELETEBOOKREVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((e) => e._id !== action.payload.id),
        userReview: null,
      };
    default:
      return state;
  }
};

export default bookDetailsReducer;
