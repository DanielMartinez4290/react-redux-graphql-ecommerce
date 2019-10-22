import defaultState from '../default-state';
import {ALL, DRESSES, PARTY} from '../actions/guitarActions';

const axios = require('axios');

let guitarState = [];

// Make a request for a user with a given ID
axios.get('http://127.0.0.1:3000/api/guitars/getGuitars')
  .then(function (response) {
    guitarState = response.data.dresses;
    //initialState.dresses = guitarState;
    console.log(guitarState);
  });

  const initialState = {
    count:0,
    dresses: defaultState.dresses
  };
  
  const dressesReducer = (state = initialState, action) => {
    
    let dressesArray = [];
  
    if (action.type === ALL){
      return {
        dresses: defaultState.dresses
      };
    }
  
    if (action.type === DRESSES){
      defaultState.dresses.forEach(function (dress) {
        if (dress.category === 'dresses') {
          dressesArray.push(dress); 
        }
      })
  
      return {
        dresses: dressesArray
      };
    }
  
    if (action.type === PARTY){
      defaultState.dresses.forEach(function (dress) {
        if (dress.category === 'party') {
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