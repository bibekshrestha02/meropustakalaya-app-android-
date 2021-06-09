import {
  FETCHBOOKDETAILS,
  ADDBOOKREVIEW,
  DELETEBOOKREVIEW,
} from '../constant/BookDetailsConstant';
import axios from '../../utils/Axios';
export const fetchBookDetailsAction = (id) => {
  return async (dispatch) => {
    const { data } = await (await axios.get(`/books/${id}`)).data;
    dispatch({
      type: FETCHBOOKDETAILS,
      payload: {
        data,
      },
    });
  };
};
export const addBookReviewAction = (values) => {
  return async (dispatch) => {
    const { data } = await (await axios.post(`/reviews/`, values)).data;

    dispatch({
      type: ADDBOOKREVIEW,
      payload: {
        review: data,
      },
    });
  };
};
export const deleteBookReviewAction = (id) => {
  return async (dispatch) => {
    await axios.delete(`/reviews/${id}`);
    dispatch({
      type: DELETEBOOKREVIEW,
      payload: {
        id,
      },
    });
  };
};
