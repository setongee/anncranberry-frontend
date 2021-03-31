import React from 'react';

import './shop-category.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../redux/shop/shop.selectors'

import {ReactComponent as Check} from '../../assests/icons/check.svg'

import SHOP_CATEGORY_ITEM from '../shop-category-item/shop-category-item'

const ShopCategory = ({collection, history, match}) => {


   let drip = Object.keys(collection)

    
    return (
    
    <div className="shop-category">
        
        <div className="intro">
            
            <div className="tag"> <h1>Shop</h1> </div>
            <div className="sub-text">pick a dress, order and let's deliver to your doorstep.</div>

            <div className="list-trust">

                <li> <Check className = 'check-icon' /> Simple payment method </li>
                <li> <Check className = 'check-icon' /> Custom sizes available </li>
                <li> <Check className = 'check-icon' /> Quick delivery (5 days max) </li>

            </div>

        </div>

        <div className="category-slider">
            
            {
                drip.map( key => {

                    let value = collection[key]
                    
                    return <SHOP_CATEGORY_ITEM items = {value} key = {value.id}/>

                })
                
            }
            
            
        </div>
    </div>

    )
}


const mapStateToProps = createStructuredSelector({
    collection : selectCollections
});



export default connect(mapStateToProps)(ShopCategory);
