import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import myAppConfig from './amplifyconfig';

import rootReducer from './reducers';
import AppContainer from './containers/AppContainer';

import Amplify from 'aws-amplify';
import configuration from './aws-exports';

Amplify.configure({...configuration, ...myAppConfig});

import dressesReducer from "./reducers/dresses-reducer";

const store = createStore(
 dressesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setTimeout(() => {
  store.dispatch({ type: 'ALL' })
}, 200);


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);