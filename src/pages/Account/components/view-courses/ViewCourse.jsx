import React from 'react';
import {courses} from '../../../../redux/academy/courses'

//video player controls

import {ReactComponent as Play} from '../../../../assests/icons/play.svg'
import {ReactComponent as Next} from '../../../../assests/icons/next.svg'
import {ReactComponent as Prev} from '../../../../assests/icons/prev.svg'
import {ReactComponent as Fullscreen} from '../../../../assests/icons/fullscreen.svg'
import {ReactComponent as Pause} from '../../../../assests/icons/pause.svg'
import {ReactComponent as Mute} from '../../../../assests/icons/mute.svg'

import './viewcourse.scss'
import Lesson from './lesson'
import {CourseLesson} from '../../../../redux/academy/course-lesson'


class ViewCourse extends React.Component {

    constructor(match){

        super();

        this.state = {

            data : CourseLesson,
            vidSrc : CourseLesson[0].src,
            title : CourseLesson[0].title,
            lesson : 1
        }

        this.match = match
    }


    changeSrc = ({src, title, id}) => {
        
        this.setState({
            vidSrc : src,
            title : title,
            lesson : id
        })
    }

    handleSkip = (id) => {

        //Handles when user clicks on the next icon on the video to go to next video

        const max = this.state.data.length

        // checks if the video is already at the end of the list

        id < max 

        ?

        (this.setState({
            vidSrc : CourseLesson[id].src,
            title : CourseLesson[id].title,
            lesson : id + 1
        }))

        :

        (this.setState({
            vidSrc : CourseLesson[0].src,
            title : CourseLesson[0].title,
            lesson : 1
        }))
    }

    handlePrev = (id) => {

        const max = this.state.data.length;
        const lastVid = max - 1
        
        // sets the cureent id for prev because id on the data didnt start with the traditional 0 to begin the object in the array
        
        const dataPrev = id - 2;
        const prevLessonID = id - 1;

        id > 1 
        
        ? 
        
        (this.setState({
            vidSrc : CourseLesson[dataPrev].src,
            title : CourseLesson[dataPrev].title,
            lesson : prevLessonID
        })) 
        
        :  
        
        (this.setState({
            vidSrc : CourseLesson[lastVid].src,
            title : CourseLesson[lastVid].title,
            lesson : lastVid
        }))

    }


    render() {

        const courseData = this.state.data

        const {match} = this.match

        //Finding out the course uid of the course to track the course information

        const courseId = courses.find(course => (

            course.uid === match.params.courseID

        ))
    
        const {title} = courseId

        
        

        return (
    
            <div className="course-body">
    
                <div className="player">
                    
                    <div className="course-video">

                        <div className="overlay"></div>
                        
                        <video 

                        autoPlay 
                        src={this.state.vidSrc} 
                        id = 'currentVideo' 
                        onEnded = { 
                        // go to next video once current video has ended
                        () => this.handleSkip(this.state.lesson)} 
                        
                        />  
                        
                    </div>
    
                    <div className="course-info">
                        <div className="title"><p><strong>{title}</strong> {`Lesson ${this.state.lesson}`} : {this.state.title}</p></div>
                        <div className="trigger-btns">
                            
    
                            <div className="play-btn">
                                <Play style = {{height : '11px'}} onClick = { () => document.querySelector('video').play() } /> 
                            </div> 
                            <div className="play-btn">
                                <Pause style = {{height : '11px'}} onClick = { () => document.querySelector('video').pause() } /> 
                            </div> 
                            <div className="play-btn">
                                <Next style = {{height : '11px'}} onClick = { () => this.handleSkip(this.state.lesson)}/> 
                            </div> 
                            <div className="play-btn">
                                <Prev style = {{height : '11px'}} onClick = { () => this.handlePrev(this.state.lesson)}/> 
                            </div> 
                            <div className="play-btn">
                                <Mute style = {{height : '11px'}} onClick = { () => document.querySelector('video').muted ? document.querySelector('video').muted = false : document.querySelector('video').muted = true } /> 
                            </div>
                            <div className="play-btn">
                                <Fullscreen style = {{height : '11px'}} onClick = { () => document.querySelector('video').requestFullscreen ? document.querySelector('video').requestFullscreen() : document.querySelector('video').webkitRequestFullscreen ? document.querySelector('video').webkitRequestFullscreen() : document.querySelector('video').msRequestFullscreen ? document.querySelector('video').msRequestFullscreen() : null} /> 
                            </div>
                        </div>
                    </div> 
    
                                   
    
                </div>
    
                
                <div className="lesson-list">
    
                    <div className="courses-heading">
                        <div className="tag">Further Lessons</div>
                    </div>
    
                    <div className="lessons-cards"> 
                            {
                                courseData.map((info) => (
                                    
                                    <Lesson key={info.id} prop = {info} handleSelect = {this.changeSrc} currentID = {this.state.lesson} />

                                ))
                            }
                    </div>
    
                </div>
    
            </div>
        );
    }

}

export default ViewCourse;
