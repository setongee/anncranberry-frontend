import React from 'react';
import ShopCategoryItem from './shop-category-item.component'

const SHOP_CATEGORY_ITEM = ({items}) => {

    const {title} = items

    return (

        <div className="category">
            
            <div className="category-img">

            {
                items.items.filter( (item, idx) => idx < 1 ).map( item => (
                    
                    <ShopCategoryItem item = {item} key = {item.id} />
                    
                ))
            }

            </div>
            
            <div className="category-title">{title}</div>

        </div>

    );
}

export default SHOP_CATEGORY_ITEM;
