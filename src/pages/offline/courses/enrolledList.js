import React from 'react';
import Container from '../../../components/container/container.component'
import './enrolledList.scss'
import PreviewCourse from './preview_enrolled'
import {ReactComponent as AddCourse} from '../../../assests/icons/plus.svg'

const EnrolledList = ({currentUser, history, match}) => {

    const courseLength = currentUser.course.offline.length

    console.log(history);

    return (

        <Container backgroundColor = '#F8F3F6'>

            <div className="enrolled_body">

                {
                    courseLength ?

                (<div className="title_enrolled"> 

                    Enrolled Offline Courses 

                    <div className="add_course_btn" style = {{

                        backgroundColor : 'hotpink',
                        display : 'flex',
                        alignItems : 'center',
                        justifyContent : 'center',
                        padding : '15px 20px',
                        borderRadius : '100px',
                        cursor : 'pointer'
                    }} onClick = { () => history.push('/academy/offline/courses') } >
                        <AddCourse style = {{marginRight : '10px'}} /> <div style = {{color: '#fff', fontSize : '14px'}} >Add Course</div>

                    </div>   

                </div>) : null 
                
                }

                {
                    courseLength ? 

                    currentUser.course.offline
                        .map( (data, index) => <PreviewCourse key = {index} selectedItem = {data.courseInfo} data = {data} dataId = {index} history = {history} match = {match} /> )
                    
                    : <div className = 'noCourse' > <h1>sorry dear, you have no courses registered</h1> <div className="linkBtn" onClick = {()=> history.push('/academy/offline/courses')} >Register course now</div> </div>
                }   

            </div>

        </Container>


    );
}

export default EnrolledList;