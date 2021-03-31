import {cartTypes} from './cart.type'

export const toggleView = () => ({
    type : cartTypes.TOGGLE_CART_VIEW
})

export const addItem = item => ({
    type : cartTypes.ADD_TO_CART,
    payload : item
})

export const clearItemFromCheckout = item => ({
    type : cartTypes.CLEAR_ITEMS_CHECKOUT,
    payload : item
})

export const reduceQuantity = item => ({
    type : cartTypes.REDUCE_ITEM_QUANTITY,
    payload : item
})

