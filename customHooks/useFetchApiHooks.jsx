import { useRef, useReducer, useEffect } from 'react';
import { initalState, reducer } from '../store/reducer/FetchReducer';
import {
  FETCHED,
  FETCH_ERROR,
  FETCHING,
} from '../store/constant/fetchReducerConstant';
import Axios from '../utils/Axios';
const useFetchApi = (url) => {
  const cache = useRef({});

  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;
    const fetchData = async () => {
      dispatch({ type: FETCHING });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({
          type: FETCHED,
          payload: {
            data,
          },
        });
      } else {
        try {
          const { data } = await (await Axios.get(url)).data;
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({
            type: FETCHED,
            payload: {
              data,
            },
          });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: FETCH_ERROR, payload: error.message });
        }
      }
    };
    fetchData();
    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);
  return state;
};
module.exports = useFetchApi;
