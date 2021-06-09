import {
  SAVEBOOK,
  EDITNAME,
  LOGIN,
  LOGOUT,
  SUBSCRIBE,
} from '../constant/ClientConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from '../../utils/Axios';
export const authAction = (data, token) => {
  return async (dispatch) => {
    await AsyncStorage.setItem('token', token);
    dispatch({
      type: LOGIN,
      payload: {
        data: data,
        token,
      },
    });
  };
};
export const logoutAction = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: LOGOUT,
    });
  };
};
export const autoLogin = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem('token');
    if (token === null) {
      return;
    }
    try {
      const res = await Axios.get('/auths/autologin', {
        headers: {
          'x-auth-token': token,
        },
      });
      dispatch({
        type: LOGIN,
        payload: {
          data: res.data.data,
          token: token,
        },
      });
    } catch (error) {
      if (!error.response) {
        return;
      } else {
        await AsyncStorage.removeItem('token');
        return;
      }
    }
  };
};
export const subscribeAction = (id) => {
  return async (dispatch) => {
    const res = await Axios.post('subscriptions/', {
      id,
    });
    const { data } = res.data;
    dispatch({
      type: SUBSCRIBE,
      payload: {
        data,
      },
    });
  };
};
export const saveBookAction = (id) => {
  return async (dispatch) => {
    const res = await Axios.post(`/users/saves/${id}`);
    dispatch({
      type: SAVEBOOK,
      payload: {
        data: res.data.data,
      },
    });
  };
};
export const editNameAction = (value) => {
  return async (dispatch) => {
    const res = await Axios.put('/users/', value);
    dispatch({
      type: EDITNAME,
      payload: {
        name: res.data.data.name,
      },
    });
  };
};
export const changePasswordAction = (values) => {
  return Axios.put('/auths/password/', values);
};
