import {ALL, GIBSON, FENDER, SORTLOW, SORTHIGH, FETCH_CHARACTERS_FULFILLED} from '../actions/guitarActions';
import { ADD_TO_CART } from '../actions/cartActions';
  
const productsReducer = (state =  {products: [], cart:[]}, action) => {
    if (action.type === ALL){
      return {products: action.payload.products, cart: []};
    }

    if(action.type === ADD_TO_CART){ 
      let addedItem = state.products.find(item=> item.id === action.id)
      return {
        ...state,
        cart: [...state.cart, addedItem],
      }
    }

    if (action.type === FETCH_CHARACTERS_FULFILLED) {
      return action.payload.characters;
    }
  
    if (action.type === GIBSON){
      return {products: action.payload.products.filter(guitar => guitar.category === 'Gibson')};
    }
  
    if (action.type === FENDER){
      return {products: action.payload.products.filter(guitar => guitar.category === 'Fender')};
    }

    if (action.type === SORTLOW){
      return {
        products: action.payload.products.sort(function(a, b) {
          return a.price - b.price; 
        }).filter(guitar => true)
      };
    }

    if (action.type === SORTHIGH){
      return {
        products: action.payload.products.sort(function(a, b) {
          return b.price - a.price; 
        }).filter(guitar => true)
      };
    }
  
    return state;
  };

export default productsReducer;