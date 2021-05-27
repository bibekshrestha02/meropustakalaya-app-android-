const {
  LOGIN,
  LOGOUT,
  SUBSCRIBE,
  BOOKMARK,
  EDITNAME,
} = require('../actions/ClientAction');
const initalState = {
  role: '',
  isVerfied: null,
  saveBook: [],
  _id: '',
  name: '',
  email: '',
  join_at: '',
  subscriptionDetail: null,
};

const ClientReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      const {
        role,
        isVerfied,
        saveBook,
        _id,
        name,
        email,
        join_at,
        subscriptionDetail,
      } = action.payload.data;
      return {
        role,
        isVerfied,
        saveBook,
        _id,
        name,
        email,
        join_at,
        subscriptionDetail,
      };
    case LOGOUT:
      return {
        role: '',
        isVerfied: null,
        saveBook: [],
        _id: '',
        name: '',
        email: '',
        join_at: '',
        subscriptionDetail: null,
      };
    case SUBSCRIBE:
      let data = action.payload.data;
      state.subscriptionDetail = data;
      return state;
    case BOOKMARK:
      data = action.payload.data;
      state.saveBook = data;
      return state;
    case EDITNAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
export default ClientReducer;
