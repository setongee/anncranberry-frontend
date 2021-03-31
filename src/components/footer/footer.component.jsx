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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem deserunt eaque neque soluta ipsam. Voluptatibus quod voluptatum deserunt, maiores qui, illum quasi dolores dolor iure assumenda magni laboriosam culpa! Maiores minus nulla soluta laudantium perspiciatis fuga ea nihil labore dolor porro. Tenetur veritatis voluptates quisquam consequuntur aperiam, eligendi expedita officia non nesciunt sapiente laboriosam atque molestias asperiores harum ad cumque fugit corporis itaque, ullam hic velit, ipsam iure! Doloremque placeat, eius sed quaerat ea veniam, voluptates voluptatum at exercitationem architecto inventore dicta consectetur maiores! Quam consequatur est quas, provident modi, a inventore voluptates hic quisquam corporis corruptiyhi nam.</p>
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
