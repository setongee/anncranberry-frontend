import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButtom from '../../components/stripe-checkout/stripe-checkout'

const CheckoutPage = ({cartItem, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItem.map(item => <CheckoutItem key={item.id} cartItem = {item} />)
        }
        
        <div className='total'>&#x20A6;{total}</div>

        <StripeCheckoutButtom price = {total}/>
        
    </div>
    
)

const mapStateToProps = createStructuredSelector ({
    cartItem : selectCartItems,
    total : selectCartTotal 
})

export default connect(mapStateToProps)(CheckoutPage)
