import React from 'react';
import {ReactComponent as Plus} from '../../assests/icons/plus.svg'
import {ReactComponent as FavHeart} from '../../assests/icons/heart.svg'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'


const SHOP_SELECT_ITEM = ({selectedCategory, addItemToCart}) => {

    const {name, imageUrl, price} = selectedCategory

    return (

        <div className="item-card">
                        
            <div className="img">
                <img src={imageUrl} alt=""/>
            </div>

            <div className="card-info">

                <div className="addToBag">
                    <div className="add_to_cart" onClick = {() => addItemToCart(selectedCategory)}>
                        <div className="plus-holder"><Plus className='plus'/></div> Add to Cart
                    </div>
                </div>

                <div className="dressName">
                   {name}
                </div>

                <div className="footers">
                    <div className="price">&#x20A6;{price}</div>
                    <div className="add_to_fav"><FavHeart/></div>
                </div>
                
            </div>

        </div>

    );
}

const dispatchStateToProps = dispatch => ({
    addItemToCart : item => dispatch(addItem(item))
})

export default connect(null, dispatchStateToProps)(SHOP_SELECT_ITEM)
