import React from 'react';

import './previewEnrolled.scss';

import {ReactComponent as Play} from '../../../assests/icons/play-solid.svg'
import {ReactComponent as Trash} from '../../../assests/icons/trash.svg'
import {ReactComponent as Pause} from '../../../assests/icons/pause-solid.svg'
import {ReactComponent as Check} from '../../../assests/icons/check.svg'
import {connect} from 'react-redux'
import PayButton from './enrollProgram'
import PayActionBtn from './PayActionBtn'
import {deleteCourseData} from '../../../db/db'


class PreviewCourse extends React.Component {

    constructor( {history, selectedItem, match, currentUser, program, data, pay} ) {

        super ()

        this.state = {

            history : history,
            selectedItem : selectedItem,
            match : match,
            currentUser : currentUser,
            program : program,
            showLogin : false,
            showRegister : false,
            data : data,
            reveal : false,
            paid : data.paid

        }

        console.log(selectedItem);

    }
    


    playVideo = () => {

       const y = document.querySelectorAll('video')
       const vid = Array.from(y);
       const currentVal = vid[this.props.dataId]
        
       const playBtn = document.querySelectorAll('.playBtn')
       const playN = Array.from(playBtn);
       const playKey = playN[this.props.dataId]

       const pauseBtn = document.querySelectorAll('.pauseBtn');
       const pauseN = Array.from(pauseBtn);
       const pauseKey = pauseN[this.props.dataId]

       currentVal.style.display = 'block'
       currentVal.play()

       playKey.style.display = 'none'
       pauseKey.style.display = 'block'

    }

    pauseVideo = () => {

       const y = document.querySelectorAll('video')
       const vid = Array.from(y);
       const currentVal = vid[this.props.dataId]
        
       const playBtn = document.querySelectorAll('.playBtn')
       const playN = Array.from(playBtn);
       const playKey = playN[this.props.dataId]

       const pauseBtn = document.querySelectorAll('.pauseBtn');
       const pauseN = Array.from(pauseBtn);
       const pauseKey = pauseN[this.props.dataId]

       currentVal.pause()

       playKey.style.display = 'block'
       pauseKey.style.display = 'none'
 
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

    checkPaid = () => {

        const findOut = this.state.currentUser.course.offline.find( e => e.course === this.state.data.course)
        return findOut.paid
    }

    render(){

        const {selectedItem, currentUser, data} = this.state
        const {thumb, title, price, what_to_learn, src} = selectedItem

        return (

            <div className="previewCourse">

                <div className="preview">

                    <div className="description" style = {{backgroundColor : '#f9f9f9', boxShadow : '0 3px 30px rgba(0,0,0,0)'}}>

                        <div className="backToCourses" 

                            style = {

                                {
                                    fontSize : '12px',
                                    fontWeight : 'bold'
                                }

                            } > Ann Cranberry - {data.course} Program </div>
                        
                        <div className="title">
                           {title}
                        </div>

                        <div className="fullSubtitle">
                           sit amet consectetur, adipisicing elit. Et aliquid atque vitae id earum laudantium praesentium, in impedit, molestias aperiam
                        </div>

                        <div className="more_info">
                            
                            <div className="date-joined"> Date Registered : { data.dateRegistered } </div>
                            
                            <div className="clickMore" onClick = {() => this.setState ( { reveal : !this.state.reveal } )}>

                            { this.state.reveal ? 'Show Less' : 'Read More' }
                            
                            </div>  

                        </div>

                        {
                            this.state.reveal ? (

                                <div className="what_to_learn" style = {{marginTop : '20px'}}>
                                    {
                                        what_to_learn.map((learn, index) => (
                                            <li key = {index} > <Check style = {{marginRight : '10px', height : '18px', color : '#666'}}/> {learn}</li>
                                        ))
                                    }
                                </div>

                            ) : null
                        }

                        <div className="gum" onClick = { async () => await deleteCourseData( currentUser.id, data ) }>
                            <Trash/>
                        </div>

                    </div>
                    
                    <div className="card" style = {{boxShadow : '0 3px 30px rgba(0, 0, 0, 0'}}>

                        <div className="img" style = {{backgroundImage : `url(${thumb})`}}>

                            <video src={src}></video>

                            <div className="play-btn"> 
                            
                                <Play className = 'controlBtn playBtn' onClick = { () => this.playVideo() } /> 
                                <Pause className = 'controlBtn pauseBtn' onClick = { () => this.pauseVideo() } /> 

                            </div>

                        </div>

                        <div className="studentsEnrolled" style = {{border : 'none'}}>Course Price : <strong> N{price}</strong> </div>

                        {
                             this.state.paid ? ( <PayActionBtn /> ) : (<PayButton COURSE_DETAILS = {{...selectedItem, course : data.course}} history = {this.state.history} />)
                        }
                        
                    </div>

                </div>

            </div>
    
    );

    }
    
}

const mapsStateToProps = (state) => ({
    currentUser : state.user.currentUser,
    pay : state.paid.paid
})

export default connect(mapsStateToProps)(PreviewCourse);
