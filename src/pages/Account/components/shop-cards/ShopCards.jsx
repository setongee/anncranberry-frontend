import React from 'react';
import './shopcards.scss'
import {ReactComponent as Arrow} from '../../../../assests/icons/action-arrow-long.svg'
import PrevImg from '../../../../assests/img/annCranberry_img.jpg'
import {ReactComponent as Love} from '../../../../assests/icons/love-2.svg'

const ShopCards = () => {
    return (
        <div className="shop-cards-holder">
            <div className="card">
                
                <div className="prev">
                    <div className="img-prev">
                        <img src={PrevImg} alt=""/>
                    </div>
                    <div className="price">N6500</div>
                </div>

                <div className="name">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime.
                </div>

                <div className="addtocart">
                    <p>add to cart</p>
                    <Arrow/>
                </div>

                <div className="isFav">
                    <Love/>
                </div>
            </div>
        </div>
    );
}

export default ShopCards;
