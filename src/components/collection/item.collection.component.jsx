import React from 'react'
import './collection.styles.scss'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'

const ItemComponent = ( { item, addItem } ) => {
    
    const {imageUrl} = item;
    
    return(

    <div className='item'>
        <div className="image">
            
            <img src= {`${imageUrl}`} alt=""/>
            
            <div className="action-card">
                <button className="add-to-cart" onClick = {() => addItem(item)} >add to cart</button>
            </div>

        </div>
    </div>

)}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch (addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemComponent)