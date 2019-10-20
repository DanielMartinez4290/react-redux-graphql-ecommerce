import defaultState from '../default-state';

const initialState = {
    count:0,
    dresses: defaultState.dresses
  };
  
  const ALL     = 'ALL'; 
  const DRESSES = 'DRESSES'; 
  const PARTY   = 'PARTY'; 
  
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