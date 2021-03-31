import React from 'react';
import './about.styles.scss'
import SidePhoto from '../../assests/img/annCranberry_img.jpg'
import Photo1 from '../../assests/img/annCranberry_photo.jpg'
import Photo2 from '../../assests/img/annCranberry_photo_2.jpg'


const AboutPage = () => (
    
    <div className="contain">
        
        <div className="main">
            
            <div className="photo">
                <img src={SidePhoto} alt="Ann Cranberry"/>
            </div>

            <div className="main-text">
                <div className="text">
                    <h1>About</h1>
                    <p>Ann Cranberry is a female clothing brand based in Nigeria founded 2014, dedicated to providing top-notch Couture wedding dresses and formal wears for clients. </p>
                </div>
            </div>
            

        </div>

        <div className="more-info">
            
            <div className="title">
                <h1>Products & Services</h1>
            </div>
            
            <div className="products">

                <div className="product">
                    <div className="round-ball">1</div>
                    <p>ANN CRANBERRY TAILORING</p>
                </div>

                <div className="product">
                    <div className="round-ball">2</div>
                    <p>ANN CRANBERRY TAILORING</p>
                </div>

                <div className="product">
                    <div className="round-ball">3</div>
                    <p>ANN CRANBERRY TAILORING</p>
                </div>

                <div className="product">
                    <div className="round-ball">4</div>
                    <p>ANN CRANBERRY TAILORING</p>
                </div>

            </div>

            <div className="holder">
                
                <div className="photo-album">
                    <div className="photo-image">
                        <img src={Photo1} alt=""/>
                    </div>
                    <div className="content">
                        <h1>Eye Catching Designs</h1>
                        <p>Our designs are inspired by art and passion to create very stylish and unique dresses for all body types.</p>
                    </div>
                </div>

                <div className="photo-album">
                    <div className="content">
                        <h1>Eye Catching Designs</h1>
                        <p>Our designs are inspired by art and passion to create very stylish and unique dresses for all body types.</p>
                    </div>
                    <div className="photo-image">
                        <img src={Photo2} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    </div>

)

export default AboutPage