import { FETCHSAVEBOOKS } from '../constant/SaveBooksConstant';
import { SAVEBOOK } from '../constant/ClientConstant';

const initalState = [];

const saveBooksReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHSAVEBOOKS:
      return action.payload.data;
      break;
    case SAVEBOOK:
      return state.filter((book) => book._id !== action.payload.id);
    default:
      return state;
  }
};

export default saveBooksReducer;
