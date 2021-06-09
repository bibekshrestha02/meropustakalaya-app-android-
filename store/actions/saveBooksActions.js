import axios from '../../utils/Axios';
import { FETCHSAVEBOOKS } from '../constant/SaveBooksConstant';

export const fetchSaveBooksAction = () => {
  return async (dispatch) => {
    const { data } = await (await axios.get('/users/saves')).data;
    dispatch({
      type: FETCHSAVEBOOKS,
      payload: {
        data,
      },
    });
  };
};
