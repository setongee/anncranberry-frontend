import React from 'react';

import {ReactComponent as Facebook} from '../../assests/icons/facebook.svg'
import {ReactComponent as Instagram} from '../../assests/icons/instagram.svg'
import {ReactComponent as Twitter} from '../../assests/icons/twitter.svg'
import {ReactComponent as Love} from '../../assests/icons/love.svg'

import './footer.styles.scss'

const Footer = () => {
    return (
        
        <div className='footer'>

            <div className="company"><h1>ANN CRANBERRY</h1></div>
            <div className="footer-body">
                <p>AnnCranberry is a fashion enterprise that is made up of AnnCranberry Couture and AnnCranberry Fashion Academy. AnnCranberry Couture is a female clothing brand dedicated to providing top-notch couture dresses; formal wear, dinner dresses, ready to wear outfits and wedding dresses. AnnCranberry Fashion Academy is dedicated to educating and empowering individuals to be fashion business owners.</p>
            </div>

            <div className="footer-end">
                <div className="social">
                    <a href="https://www.facebook.com/"><Facebook/></a>
                    <a href="https://www.facebook.com/"><Instagram/></a>
                    <a href="https://www.facebook.com/"><Twitter/></a>
                </div>
                <div>
                    <p><span>Created with</span> <Love className='hrt'/> from Setonji</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
