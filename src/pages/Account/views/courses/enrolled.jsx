import React from 'react';
import EnrolledCard from './enrolled-card'
import {selectEnrolledCourse} from '../../../../redux/academy/academy.selectors'
import {selectCurrentUser} from '../../../../redux/user/user.selector'
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux'
import Container from '../../../../components/container/container.component'

const Enrolled = ({courses, history, currentUser}) => {

    return (

        <Container backgroundColor = '#F8F3F6'>

            <div className="course-heading">Enrolled Courses</div>

            <div className="courses">
                {
                    courses.map(course => {

                        return <EnrolledCard key = {course.id} courses = {course} history = {history} currentUser = {currentUser.id} />
                        
                    })
                }
            </div>

        </Container>

    );
}

const mapStateToProps = createStructuredSelector({
    courses : selectEnrolledCourse,
    currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(Enrolled);
