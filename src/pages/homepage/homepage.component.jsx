import React from 'react';
import './homepage.styles.scss';
import BodyHomepage from '../../components/body-hompage/BodyHomepage'
import AboutSection from '../../components/about-section/about-section.component'

const HomePage = () => {

    return (

        <div className="homepage">  
            <BodyHomepage/>
            <AboutSection/>
        </div>
    )
}

export default HomePage