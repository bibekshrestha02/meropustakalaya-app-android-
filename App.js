import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ClientReducer from './store/reducer/ClientReducer';
import SaveBooksReducer from './store/reducer/SaveBooksReducer';
import BookDetailsReducer from './store/reducer/BookDetailsReducer';
import MainNavigation from './navigations/MainNavigation';
import ReduxThunk from 'redux-thunk';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorFallbackComponent from './components/ErrorFallbackComponent';
export default function App() {
  const reducer = combineReducers({
    client: ClientReducer,
    saveBooks: SaveBooksReducer,
    bookDetails: BookDetailsReducer,
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
      <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        <MainNavigation />
      </ErrorBoundary>
    </Provider>
  );
}
