import React from 'react';
import './cartItem.styles.scss'


const CartItem = ({item : {price, quantity, name, imageUrl}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} X &#x20A6;{price}</span>
        </div>
    </div>
)

export default CartItem;
