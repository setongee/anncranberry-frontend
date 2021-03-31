import React from 'react'
import './bodyhomepage.styles.scss'
import {ReactComponent as Facebook} from '../../assests/icons/facebook.svg'
import {ReactComponent as Instagram} from '../../assests/icons/instagram.svg'
import {ReactComponent as Twitter} from '../../assests/icons/twitter.svg'
import {ReactComponent as Arrow} from '../../assests/icons/arrow-right.svg'
import {Link} from 'react-router-dom'
import slider from '../../assests/img/homepage.png'

const BodyHomepage = () => (
    
    <div className = 'head'>
        
        <div className='bg'>
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="bg-3">

                <div className="side-links">

                    <div className="collection">
                        <Link to = "/collections/2019" className="link">2019 Collection</Link>
                        <Link to = "/collections/2020" className="link">2020 Collection</Link>
                    </div>

                    <div className="social col-display">
                        <a href="https://www.facebook.com/"><Facebook/></a>
                        <a href="https://www.facebook.com/"><Instagram/></a>
                        <a href="https://www.facebook.com/"><Twitter/></a>
                    </div>

                </div>

            </div> 
            
        </div> 


        <div className="main-txt">
            <h1>enjoy <span>elegance, perfection</span> in class, order your style.</h1>

            <div className="subtitle">
                <p>Ann Cranberry is a female clothing brand based in Nigeria founded 2014, dedicated to providing top-notch Couture wedding dresses and formal wears for clients. </p>
                <Link to='/shop' className="action-btn">Shop Now <Arrow className='arrow'/> </Link>
            </div>
            
        </div>

        <div className="slider">
            <img src={slider} alt="slider"/>
        </div>


    </div> 

)


export default BodyHomepage
