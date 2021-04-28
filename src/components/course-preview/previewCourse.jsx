import React from 'react';

import './previewCourse.scss';

import Login from '../../components/auth/auth.js'
import RegisterCourse from '../../components/auth/auth.register'

import {ReactComponent as Play} from '../../assests/icons/play-solid.svg'
import {ReactComponent as Pause} from '../../assests/icons/pause-solid.svg'
//import {ReactComponent as BankCard} from '../../assests/icons/bank-card.svg'
import {ReactComponent as ArrowRight} from '../../assests/icons/arrow-right.svg'
import {ReactComponent as ArrowBack} from '../../assests/icons/arrow-back.svg'
import {ReactComponent as Check} from '../../assests/icons/check.svg'
import {addItem} from '../../redux/academy/academy-actions'
import {connect} from 'react-redux'
import {updateUserEnrolled} from '../../db/db'


class PreviewCourse extends React.Component {

    constructor( {history, selectedItem, match, currentUser, program} ) {
        super ()

        this.state = {

            history : history,
            selectedItem : selectedItem,
            match : match,
            currentUser : currentUser,
            program : program,
            showLogin : false,
            showRegister : false

        }

    }


    playVideo = () => {

       const videoBar = document.querySelector('video')
       const playBtn = document.querySelector('.playBtn')
       const pauseBtn = document.querySelector('.pauseBtn')

       videoBar.style.display = 'block'
       videoBar.play()
       playBtn.style.display = 'none'
       pauseBtn.style.display = 'block'

    }

    pauseVideo = () => {

        const videoBar = document.querySelector('video')
        const playBtn = document.querySelector('.playBtn')
        const pauseBtn = document.querySelector('.pauseBtn')
 
        videoBar.pause()
        playBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
 
    }

    closeLoginBar = () => {
        this.setState ( {showLogin : false, showRegister : false} )
    }

    showLoginBar = () => {

        this.setState ( {showLogin : true , showRegister : false} )
    }

    showRegisterBar = () => {

        this.setState ( {showLogin : false , showRegister : true} )
    }

    render(){

        const {history, selectedItem, showLogin, showRegister, currentUser } = this.state

        const {thumb, title, what_to_learn, src, sub} = selectedItem

        return (

            <div className="previewCourse">

                <div className="preview">

                    <div className="description">

                        <div className="backToCourses" onClick = {() => history.goBack() }>
                            <ArrowBack style = {{marginRight : '15px'}}/> Back to programs
                        </div>
                        
                        <div className="title">
                           {title}
                        </div>

                        <div className="fullSubtitle">
                           {sub}
                        </div>

                        {
                            what_to_learn.length ?
                                (<div className="what_to_learn">

                                    <div className="learn_what">What you will learn : </div>

                                    {
                                        what_to_learn.map((learn, index) => (
                                            <li key = {index} > <Check style = {{marginRight : '10px', height : '18px', color : '#666'}}/> {learn}</li>
                                        ))
                                    }

                                </div>) : null

                        }


                    </div>
                    
                    <div className="card">

                        <div className="img" style = {{backgroundImage : `url(${thumb})`}}>

                            <video src={src}></video>

                            <div className="play-btn"> 
                            
                                <Play className = 'controlBtn playBtn' onClick = { () => this.playVideo() } /> 
                                <Pause className = 'controlBtn pauseBtn' onClick = { () => this.pauseVideo() } /> 

                            </div>

                        </div>

                        <div className="studentsEnrolled">Students Enrolled : <strong> 22 </strong> </div>

                        <div className="course-checkout"  

                            onClick = { async () => {

                                if ( currentUser ) {

                                    await updateUserEnrolled(currentUser.id, this.state.program, selectedItem)
                                        .then(() => history.push('/courses/enrolled/offline') )

                                } else {

                                    this.setState( {showLogin : true } )

                                }

                            }} 

                        >
                            
                            <div className = 'card-game'>
                                Register for this course
                            </div>

                            <ArrowRight/>
                            
                        </div>
                        
                    </div>

                   { showLogin ? <Login courseData = {selectedItem} closeModal = {this.closeLoginBar} enrolled = {this.state.program} showRegister = {this.showRegisterBar} /> : null }

                   { showRegister ? <RegisterCourse courseData = {selectedItem} closeModal = {this.closeLoginBar} enrolled = {this.state.program} showLogin = {this.showLoginBar} /> : null }

                </div>

            </div>
    
    );

    }
    
}

const mapsStateToProps = (state, ownProps) => ({
    currentUser : state.user.currentUser
})

const dispatchStateToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(mapsStateToProps, dispatchStateToProps)(PreviewCourse);
