/* Action Types */
export const ADD_TO_CART  = 'ADD_TO_CART'; 
export const SHOW_CART_MODAL = 'SHOW_CART_MODAL';
export const HIDE_CART_MODAL = 'HIDE_CART_MODAL';

// show cart modal
export function showCartModal () {
    return { type: SHOW_CART_MODAL }
}

//hide cart modal
export function hideCartModal () {
    return { type: HIDE_CART_MODAL }
}

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}