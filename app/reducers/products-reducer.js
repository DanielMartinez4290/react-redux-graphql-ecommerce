import {ALL, GIBSON, FENDER, SORTLOW, SORTHIGH, FETCH_CHARACTERS_FULFILLED} from '../actions/guitarActions';
import { ADD_TO_CART, SHOW_CART_MODAL, HIDE_CART_MODAL } from '../actions/cartActions';
import { VisibilityFilters } from '../actions/visibilityActions';
  
const initState = {
    products: [],
    cart: [],
    showCart: false,
    visibilityFilter: ALL,
    total: 0
}

const productsReducer = (state =  initState, action) => {
    if (action.type === ALL){
      return {
        ...state,
        products: action.payload.products 
      };
    }

    if (action.type === ADD_TO_CART){ 
      let addedItem = state.products.find(item=> item.id === action.id);
      //let existed_item= state.cart.find(item=> item.id === action.id);

      return {
        ...state,
        cart: [...state.cart, addedItem],
        showCart:true,
        total:state.total + addedItem.price
      }
    }

    if (action.type === SHOW_CART_MODAL) {
      return {
        ...state,
        showCart:true
      }
    }

    if (action.type === HIDE_CART_MODAL) {
      return {
        ...state,
        showCart:false
      }
    }

    if (action.type === FETCH_CHARACTERS_FULFILLED) {
      return action.payload.characters;
    }
  
    if (action.type === VisibilityFilters.SHOW_GIBSON){
      return {
        ...state,
        visibilityFilter: VisibilityFilters.SHOW_GIBSON, 
      };
    }
  
    if (action.type === VisibilityFilters.SHOW_FENDER){
      return {
        ...state,
        visibilityFilter: VisibilityFilters.SHOW_FENDER, 
      };
    }

    if (action.type === SORTLOW){
      return {
        ...state,
        products: action.payload.products.sort(function(a, b) {
          return a.price - b.price; 
        }).filter(guitar => true)
      };
    }

    if (action.type === SORTHIGH){
      return {
        ...state,
        products: action.payload.products.sort(function(a, b) {
          return b.price - a.price; 
        }).filter(guitar => true)
      };
    }
  
    return state;
  };

export default productsReducer;