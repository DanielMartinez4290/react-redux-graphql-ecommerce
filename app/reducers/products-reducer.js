import {ALL, DRESSES, PARTY} from '../actions/guitarActions';
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
    //console.log("the action is %", action.payload);
    let dressesArray = [];
  
    if (action.type === ALL){
      return {
        products: guitars
      };
    }
  
    if (action.type === DRESSES){
      guitars.forEach(function (dress) {
        if (dress.category === 'Gibson') {
          dressesArray.push(dress); 
        }
      })
  
      return {
        products: dressesArray
      };
    }
  
    if (action.type === PARTY){
      guitars.forEach(function (dress) {
        if (dress.category === 'Fender') {
          dressesArray.push(dress); 
        }
      })
  
      return {
        products: dressesArray
      };
    }
  
    return state;
  };

export default productsReducer;