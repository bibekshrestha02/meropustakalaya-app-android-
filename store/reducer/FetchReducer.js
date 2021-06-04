import {
  FETCHED,
  FETCHING,
  FETCH_ERROR,
} from '../constant/fetchReducerConstant';
export const initalState = {
  status: 'idle',
  error: null,
  data: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, status: FETCHING };
    case FETCHED:
      return { ...state, status: FETCHED, data: action.payload.data };
    case FETCH_ERROR:
      return { ...state, status: FETCH_ERROR, error: action.payload };
    default:
      return state;
  }
};
