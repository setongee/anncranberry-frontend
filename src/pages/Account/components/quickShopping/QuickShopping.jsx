import React from 'react';
import './quickshopping.scss'
import ShopCards from '../shop-cards/ShopCards'

class QuickShopping extends React.Component {

    constructor(){
        super()
        this.state = {

            shop : 'data from shop'
        }
    }

    render () {

        return (
            <div className="quick-shopping">

                <div className="headers">
                    <h1>Shop Quickly</h1>
                </div>

                <div className="shop-cards">
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                    <ShopCards/>
                </div>
            </div>
        );
        
    }
}

export default QuickShopping;
