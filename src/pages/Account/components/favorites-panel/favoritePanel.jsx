import React from 'react';
import './favoritePanel.scss';
import Image from '../../../../assests/img/annCranberry_photo.jpg'
import {ReactComponent as Trash} from '../../../../assests/icons/trash.svg'

const favoritePanel = () => {
    return (
        <div className="fav-panel">

            <div className="heading">
                <h1>My Favorites List</h1>
            </div>

            <div className="isFavInfo">

                <div className="fav-card">

                    <div className="img">
                        <img src={Image} alt=""/>
                    </div>

                    <div className="info-text">
                        <div className="name">
                            Top notch jabbly office station Jacket
                        </div>
                        <div className="others">
                            <div className="price">N10,500</div>
                            <div className="action">Buy Now</div>
                        </div>
                    </div>

                </div>

                <div className="remove-item">
                    <Trash/>
                </div>
                
            </div>

            <div className="isFavInfo">

                <div className="fav-card">

                    <div className="img">
                        <img src={Image} alt=""/>
                    </div>

                    <div className="info-text">
                        <div className="name">
                            Top notch jabbly office station Jacket
                        </div>
                        <div className="others">
                            <div className="price">N10,500</div>
                            <div className="action">Buy Now</div>
                        </div>
                    </div>

                </div>

                <div className="remove-item">
                    <Trash/>
                </div>
                
            </div>

            <div className="isFavInfo">

                <div className="fav-card">

                    <div className="img">
                        <img src={Image} alt=""/>
                    </div>

                    <div className="info-text">
                        <div className="name">
                            Top notch jabbly office station Jacket
                        </div>
                        <div className="others">
                            <div className="price">N10,500</div>
                            <div className="action">Buy Now</div>
                        </div>
                    </div>

                </div>

                <div className="remove-item">
                    <Trash/>
                </div>
                
            </div>

            <div className="isFavInfo">

                <div className="fav-card">

                    <div className="img">
                        <img src={Image} alt=""/>
                    </div>

                    <div className="info-text">
                        <div className="name">
                            Top notch jabbly office station Jacket
                        </div>
                        <div className="others">
                            <div className="price">N10,500</div>
                            <div className="action">Buy Now</div>
                        </div>
                    </div>

                </div>

                <div className="remove-item">
                    <Trash/>
                </div>
                
            </div>

            
        </div>
    );
}

export default favoritePanel;
