import React from 'react';
import {ReactComponent as ArrowBack} from '../../assests/icons/arrow-back.svg'
import './shop-category-select.scss'
import SHOP_SELECT_ITEM from '../../components/shop-category-select-item/shop-select-item'
import {connect} from 'react-redux';
import {selectedItem} from '../../redux/shop/shop.selectors'

const SHOP_CATEGORY_SELECT = ({selectedItem, history}) => {

    const {title, items} = selectedItem

    return (

            <div className="shop-items-listing">
                
                <div className="nav">
                    <div className="goBack">
                        <ArrowBack className='goBack-arrow' onClick = {() => history.push('/shop')}/> Back to shop Category
                    </div>
                    <div className="shop-tag">
                        {title}
                    </div>
                </div>

                <div className="items">

                    {
                        items.map(item => <SHOP_SELECT_ITEM key ={item.id} selectedCategory = {item} />)
                    }

                </div>
            </div>
    );
}

const mapsStateToProps = (state, ownProps) => ({
    selectedItem : selectedItem(ownProps.match.params.categoryId)(state)
})

export default connect(mapsStateToProps)(SHOP_CATEGORY_SELECT)
