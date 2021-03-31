import React from 'react';
import CourseCard from '../../pages/Account/components/course-card/course-card'
import {selectAcademyCourse} from '../../redux/academy/academy.selectors'
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux'
import './courses.scss'

const CourseSelect = ({courses, history, match}) => {

    const LEVEL = match.params.level;

    let step;

    switch (LEVEL) {
        case 'basic' :
            step = courses.basic
        break;

        case 'advanced' : 
             step = courses.advanced
        break; 

        case 'bridal' : 
             step = courses.bridal
        break; 

        default :
            return null
            
    }


    return (

            <div className = 'course_header'>

                <div className="courses">

                    {
                        Object.entries(step).map( ([key, value]) => {

                            return <CourseCard key = {key} courses = {value} id = {key} history = {history} match = {match} program = {LEVEL}/>
                            
                        })
                    }                      

                </div>

            </div>

    );
}

const mapStateToProps = createStructuredSelector({
    courses : selectAcademyCourse
})

export default connect(mapStateToProps)(CourseSelect);
