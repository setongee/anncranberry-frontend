import React from 'react';
import Container from '../../../../components/container/container.component';

import {connect} from 'react-redux'
import {newUser} from '../../../../redux/user/user.actions'

import './onboarding.scss'
import {data} from './onboarding-data'


import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';



SwiperCore.use([Navigation, Pagination])


const OnboardingPage = ({isnewUser}) => {

    const slides = [] 

    data.forEach(slide => {
        slides.push(

            <SwiperSlide key = {slide.id}>
                
                <div className="slides">

                    <div className="slide">

                        <div className="vector">
                            <img src={slide.imgUrl} alt={`slide-${slide.id}`} className={`${slide.shift ? 'shift' : '' }`}/>
                        </div>

                        <div className="info">

                            <div className="header">
                                <h1>{slide.header}</h1>
                            </div>
                            <div className="subtitle">
                                <p>{slide.subtitle}</p>
                            </div>

                        </div>

                    </div>

                </div>

            </SwiperSlide>
        )
    })

    return (

        <Container>

            <div className="flex-center">

                <div className="onboard">

                    <Swiper id='main' navigation>{slides}</Swiper>

                    <div className="controls">
                        <div className="proceed" onClick = {isnewUser}>proceed to dashboard</div>
                    </div>

                </div>

            </div>     

        </Container>

        
    );
}



const dispatchToProps = dispatch => ({
    isnewUser : () => dispatch(newUser())
})



export default connect(null, dispatchToProps)(OnboardingPage);
