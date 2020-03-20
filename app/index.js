import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import AppContainer from './containers/AppContainer';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './fetch-character-epic';
import productsReducer from "./reducers/products-reducer";
import { fetchProducts } from './actions/guitarActions';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  productsReducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  //applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

setTimeout(() => {
  store.dispatch(fetchProducts());
}, 800);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);