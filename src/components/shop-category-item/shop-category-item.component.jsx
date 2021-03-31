import React from 'react';
import {withRouter} from 'react-router-dom'

const ShopCategoryItem = ({item, history, match}) => {

    return (
        
        <img src={item.imageUrl} key = {item.id} alt={`${item.title}`} onClick={() => history.push(`${match.url}/${item.routeName}`)} />
        
    );
}

export default withRouter(ShopCategoryItem);
