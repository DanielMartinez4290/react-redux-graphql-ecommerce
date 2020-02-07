import {ALL, GIBSON, FENDER} from '../actions/guitarActions';
import configuration from '../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ListGuitars } from '../graphql';

Amplify.configure({...configuration});
let guitars = [];

// Make request to get guitars
API.graphql(graphqlOperation(ListGuitars))
   .then(response => {
     guitars = response.data.listGuitars.items;
   })
   .catch(console.error);

  const initialState = {
    products: guitars
  };
  
  const productsReducer = (state = initialState, action) => {
  
    if (action.type === ALL){
      return {
        products: guitars
      };
    }
  
    if (action.type === GIBSON){
      return {
        products: guitars.filter(guitar => guitar.category === 'Gibson')
      };
    }
  
    if (action.type === FENDER){
      return {
        products: guitars.filter(guitar => guitar.category === 'Fender')
      };
    }
  
    return state;
  };

export default productsReducer;