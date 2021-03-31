import React from 'react'
import ShopCategory from '../../components/shop-category/shop-category.component'
import Container from '../../components/container/container.component'
import {Route} from 'react-router-dom'
import SHOP_CATEGORY_SELECT from '../shop-category-select/shop-category-select'

const Shop = ({ match }) => {
    
    return (
   
    <Container>

        <Route exact path={`${match.path}`} component = {ShopCategory} />
        
        <Route path={`${match.path}/:categoryId`} component = {SHOP_CATEGORY_SELECT} />

    </Container>
    
)}


export default Shop;