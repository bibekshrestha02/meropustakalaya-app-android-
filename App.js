import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ClientReducer from './store/reducer/ClientReducer';
import MainNavigation from './navigations/MainNavigation';
import ReduxThunk from 'redux-thunk';
export default function App() {
  const reducer = combineReducers({
    client: ClientReducer,
  });
  const store = createStore(reducer, applyMiddleware(ReduxThunk));
  const [loaded] = useFonts({
    GentiumBold: require('./assets/fonts/GentiumBasic-Bold.ttf'),
    Gentium: require('./assets/fonts/GentiumBasic-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
