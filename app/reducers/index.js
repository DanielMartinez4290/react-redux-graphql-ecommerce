import { combineReducers } from 'redux';

import productsReducer from './products-reducer';
import cartReducer from './cartReducer';

export default combineReducers({
  productsReducer,
  cartReducer
});
