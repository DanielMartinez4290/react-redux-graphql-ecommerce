import {ALL, GIBSON, FENDER, SORTLOW, SORTHIGH} from '../actions/guitarActions';
  
const productsReducer = (state = {products: []}, action) => {
    if (action.type === ALL){
      return {products: action.payload.products};
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