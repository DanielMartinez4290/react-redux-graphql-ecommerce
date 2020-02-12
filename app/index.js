import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import AppContainer from './containers/AppContainer';
import thunk from 'redux-thunk';

import productsReducer from "./reducers/products-reducer";
import { fetchProducts } from './actions/guitarActions';

const store = createStore(
  productsReducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

setTimeout(() => {
  store.dispatch(fetchProducts());
}, 800);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);