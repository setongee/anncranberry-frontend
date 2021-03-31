import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cartItem.component';
import CustomButton from '../customButton/customButton.component'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleView} from '../../redux/cart/cart.actions'
import EmptyCart from '../../assests/illustration/emptyCart-0.svg'

const CartDropdown = ({cartItem, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className={`${cartItem.length ? '' : 'remove-scroll'} cart-items`}>
            {   
                cartItem.length
                ? 
                (cartItem.map(cartItem => (
                    <CartItem key = {cartItem.id} item = {cartItem} />
                ))) 
                :
                <div className ="empty-message">
                    <div className="illustration">
                        <img src={EmptyCart} alt="empty cart"/>
                    </div>

                    <div className="info">
                        <span>Sorry, YOU DO NOT HAVE ANY ITEMS IN YOUR CART</span>
                    </div>
                </div>
            }
        </div>

        {
            cartItem.length ? (<CustomButton onClick = { () => { 
                history.push('/checkout');
                dispatch(toggleView()); }}>
                    GO TO CHECKOUT</CustomButton>) 
                    
                    : 

                    (<CustomButton onClick = { () => { 
                        history.push('/shop');
                        dispatch(toggleView()); }}>
                            SHOP NOW</CustomButton>)
        }


    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItem : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
