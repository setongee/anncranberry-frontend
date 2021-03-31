import React from 'react';
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCheckout} from '../../redux/cart/cart.actions'
import {addItem, reduceQuantity} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, removeItem, addItem, reduceItemQuantity}) => {
    
    const {name, imageUrl, quantity, price} = cartItem
    
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item' />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow-left" onClick = { () => reduceItemQuantity(cartItem) }>&#10094;</div>
            <div className="value">{quantity}</div>     
            <div className="arrow-right" onClick ={ () => addItem(cartItem) }>&#10095;</div>    
        </span>
        <span className="price">{price}</span>
        <div className='remove-button' onClick = { () => removeItem(cartItem) }>&#10005;</div>
    </div>
)}


const dispatchStateToProps = dispatch => ({
    removeItem : item => dispatch(clearItemFromCheckout(item)),
    addItem : item => dispatch(addItem(item)),
    reduceItemQuantity : item => dispatch(reduceQuantity(item))
})

export default connect(null, dispatchStateToProps)(CheckoutItem);
