import configuration from '../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ListGuitars } from '../graphql';
Amplify.configure({...configuration});

/* Action Types */
export const ALL      = 'ALL'; 
export const GIBSON   = 'GIBSON'; 
export const FENDER   = 'FENDER';
export const SORTLOW  = 'SORTLOW';
export const SORTHIGH = 'SORTHIGH';
export const FETCH_CHARACTERS           = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_FULFILLED = 'FETCH_CHARACTERS_FULFILLED';

/* Thunks */
let products = [];
export const fetchProducts = () => {
  return dispatch => {
    API.graphql(graphqlOperation(ListGuitars))
      .then(response => {
        products = response.data.listGuitars.items;
        dispatch(addProducts(products))
      })
      .catch(console.error);
  }
}

/* Action Creators */
export const addProducts = products => ({
  type: ALL,
  payload: { products }
});

export function allCategory () {
  return { type: ALL, payload: { products } }
}

export function gibsonCategory () {
  return { type: GIBSON, payload: { products } }
}

export function fenderCategory () {
  return { type: FENDER, payload: {products} }
}

export function sortLow () {
  return { type: SORTLOW, payload: {products} }
}

export function sortHigh () {
  return { type: SORTHIGH, payload: {products} }
}

/* Epics */
export const fetchCharacters = searchTerm => {
  return {
    type: FETCH_CHARACTERS,
    payload: {searchTerm},
  };
};

export const fetchCharactersFulfilled = payload => {
  return {
    type: FETCH_CHARACTERS_FULFILLED,
    payload,
  };
};
