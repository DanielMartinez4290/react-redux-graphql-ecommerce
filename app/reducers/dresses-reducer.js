import {ALL, DRESSES, PARTY} from '../actions/guitarActions';

const axios = require('axios');

let guitarState = [];

// Make request to get guitars
axios.get('http://127.0.0.1:3000/api/guitars/getGuitars')
  .then(function (response) {
    guitarState = response.data.dresses;
  });

  const initialState = {
    count:0,
    dresses: []
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
        if (dress.category === 'dresses') {
          dressesArray.push(dress); 
        }
      })
  
      return {
        dresses: dressesArray
      };
    }
  
    if (action.type === PARTY){
      guitarState.forEach(function (dress) {
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