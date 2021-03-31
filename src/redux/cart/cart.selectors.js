import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItem
)

export const selectCartView = createSelector(
    selectCart,
    (cart) => cart.view
)

export const selectCartCount = createSelector(
    selectCartItems,
    cartItem => cartItem.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartTotal = createSelector(
    selectCartItems,
    cartItem => cartItem.reduce((total, item) => total + item.quantity * item.price, 0)
)