import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/icons/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggleView} from '../../redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect'
import {selectCartCount} from '../../redux/cart/cart.selectors'


const CartIcon = ({toggleView, count}) => (

    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleView} />
        <span className ='item-count' >{count}</span>
    </div>

)

const mapStateToProps = createStructuredSelector({
    count : selectCartCount
})

const mapDispachToProps = dispatch => ({
    toggleView : () => dispatch (toggleView())
})

export default connect(mapStateToProps, mapDispachToProps)(CartIcon)