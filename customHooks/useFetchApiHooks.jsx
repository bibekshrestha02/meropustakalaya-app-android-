import { useReducer, useEffect } from 'react';
import { initalState, reducer } from '../store/reducer/FetchReducer';
import {
  FETCHED,
  FETCH_ERROR,
  FETCHING,
} from '../store/constant/fetchReducerConstant';
import Axios from 'axios';
const useFetchApi = (...url) => {
  let cancelRequest = false;
  const [state, dispatch] = useReducer(reducer, initalState);
  const fetchData = async () => {
    dispatch({ type: FETCHING });

    Axios.all(url)
      .then(
        Axios.spread((...responses) => {
          let data = [];
          responses.forEach((res) => {
            return data.push(res.data.data);
          });
          if (cancelRequest) return;
          dispatch({
            type: FETCHED,
            payload: {
              data,
            },
          });
        })
      )
      .catch((error) => {
        if (cancelRequest) return;
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
  useEffect(() => {
    if (url.length < 1) return;
    fetchData();
    return function cleanup() {
      cancelRequest = true;
    };
  }, [url.length]);
  return { state, fetchDataHandler: fetchData, dispatchAction: dispatch };
};
module.exports = useFetchApi;
