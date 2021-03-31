import React from 'react';
import './menu.styles.scss';
import {Link} from 'react-router-dom';
import {toggleViewMenu} from '../../redux/menu/menu.actions'
import {toggleView} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'

const MenuUser = ({hide, dispatch, cartOpen}) => {
    
    
        const cartClose = (cart) => {
            if (!cart) {
               dispatch( toggleView())
            }
        }
    
    
    return (
        <div className={`${hide ? 'close' : 'open'} menubar`}>
        <div className="menu-links">
            <div className='close-btn' onClick={() => dispatch(toggleViewMenu())}>X</div>

            <Link className = 'menu-link' to = '/' onClick = {() => {dispatch(toggleViewMenu()); cartClose(cartOpen)}} >home</Link>
            <Link className = 'menu-link' to = '/about' onClick = {() => {dispatch(toggleViewMenu()); cartClose(cartOpen)}} >about</Link>
            <Link className = 'menu-link' to = '/collections' onClick = {() => {dispatch(toggleViewMenu()); cartClose(cartOpen)}} >collections</Link>
            <Link className = 'menu-link' to = '/shop' onClick = {() => {dispatch(toggleViewMenu()); cartClose(cartOpen)}} >shop</Link>
            <Link className = 'menu-link' to = '/courses/enrolled/offline' onClick = {() => {dispatch(toggleViewMenu()); cartClose(cartOpen)}} >academy</Link>
            <Link className = 'menu-link' to = '/contact' onClick = {() => {dispatch(toggleViewMenu()); cartClose(cartOpen)}} >contact</Link>
        </div>
        <div className="quick-contact">
            <p>No 11, Raymond Street off Montgomery Road, Yaba, Lagos, Nigeria</p>
        </div>
    </div>
    )
}

export default connect()(MenuUser);
