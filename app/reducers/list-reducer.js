import {lists as defaultLists} from '../normalized-state';

const initialState = {
  count:0,
  dressesa: 'asdfad'
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});


const listsReducer = (lists = defaultLists, action) => {
  console.log(lists, action);

  if (action.type === INCREMENT) {
    return{
      count: lists.count + 1,
    };
  }

  if (action.type === DECREMENT) {
    return{
      count: lists.count - 1,
    };
  }
  return lists;
}

export default listsReducer;