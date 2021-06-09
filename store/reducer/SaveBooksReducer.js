import { FETCHSAVEBOOKS } from '../constant/SaveBooksConstant';
const initalState = [];

const saveBooksReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHSAVEBOOKS:
      return action.payload.data;
      break;

    default:
      return state;
  }
};

export default saveBooksReducer;
