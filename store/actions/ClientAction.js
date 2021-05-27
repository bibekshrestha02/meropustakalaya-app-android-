export const LOGIN = 'Login';
export const LOGOUT = 'logout';
export const SUBSCRIBE = 'subscribe';
export const BOOKMARK = 'bookmark';
export const EDITNAME = 'editName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from '../../utils/Axios';
export const authAction = (data, token) => {
  return async (dispatch) => {
    console.log(token);
    await AsyncStorage.setItem('token', token);
    dispatch({
      type: LOGIN,
      payload: {
        data: data,
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
    const res = await Axios.get('/auths/autologin', {
      headers: {
        'x-auth-token': token,
      },
    });
    dispatch({
      type: LOGIN,
      payload: {
        data: res.data.data,
      },
    });
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
export const bookMarkAction = (id) => {
  return async (dispatch) => {
    const res = await Axios.post(`/users/saves/${id}`);
    dispatch({
      type: BOOKMARK,
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
