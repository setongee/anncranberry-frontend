export const addItemsToCart = (cartItems, cartItemToAdd) => {

    const existingItems = cartItems.find(cartItem => 
        cartItem.id === cartItemToAdd.id
    );

    if (existingItems) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}


export const removeItemQuantity = (cartItems, cartItemToRemove) => {

    const existingItems = cartItems.find(cartItem => 
        cartItem.id === cartItemToRemove.id
    );

    if (existingItems.quantity === 1) {

        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)  
    
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
        ? 
        {...cartItem, quantity: cartItem.quantity - 1}
        : 
        cartItem )
        
}
