import {cartTypes} from './cart.type'
import {addItemsToCart, removeItemQuantity} from './cart.utils'

const INITIAL_STATE = {
    view : true,
    cartItem : []
};

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartTypes.TOGGLE_CART_VIEW : 
        return {
            ...state,
            view : !state.view,
        }

        case cartTypes.ADD_TO_CART :
        return {
            ...state,
            cartItem : addItemsToCart(state.cartItem, action.payload)
        }

        case cartTypes.CLEAR_ITEMS_CHECKOUT : 
        return {
            ...state,
            cartItem : state.cartItem.filter(item => item.id !== action.payload.id)
        }

        case cartTypes.REDUCE_ITEM_QUANTITY :
        return {
            ...state,
            cartItem : removeItemQuantity(state.cartItem, action.payload)
        }

        default :
        return state
    }

}

export default cartReducer;