/* Action Types */
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_GIBSON = 'SHOW_GIBSON';
export const SHOW_FENDER = 'SHOW_FENDER';

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});
  
export const VisibilityFilters = {
    SHOW_ALL: SHOW_ALL,
    SHOW_GIBSON: SHOW_GIBSON,
    SHOW_FENDER: SHOW_FENDER,
}