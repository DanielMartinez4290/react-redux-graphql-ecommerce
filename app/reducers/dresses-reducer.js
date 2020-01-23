import {ALL, DRESSES, PARTY} from '../actions/guitarActions';
import configuration from '../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ListGuitars } from '../graphql';

Amplify.configure({...configuration});
let guitarState = [];

// Make request to get guitars
API.graphql(graphqlOperation(ListGuitars))
   .then(response => {
     guitarState = response.data.listGuitars.items;
   })
   .catch(console.error);

  const initialState = {
    dresses: guitarState
  };
  
  const dressesReducer = (state = initialState, action) => {
    let dressesArray = [];
  
    if (action.type === ALL){
      return {
        dresses: guitarState
      };
    }
  
    if (action.type === DRESSES){
      guitarState.forEach(function (dress) {
        if (dress.category === 'Gibson') {
          dressesArray.push(dress); 
        }
      })
  
      return {
        dresses: dressesArray
      };
    }
  
    if (action.type === PARTY){
      guitarState.forEach(function (dress) {
        if (dress.category === 'Fender') {
          dressesArray.push(dress); 
        }
      })
  
      return {
        dresses: dressesArray
      };
    }
  
    return state;
  };

export default dressesReducer;