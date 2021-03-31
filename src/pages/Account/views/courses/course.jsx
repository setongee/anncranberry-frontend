import React from 'react';
import {withRouter, Route} from 'react-router-dom';

import ViewCourse from '../../components/view-courses/ViewCourse'
import './course.scss'


const CoursePage = ({match}) => {
    
    return (
        
        <div className="course-contain">
            <Route path = {`${match.path}/:courseID`} component = {ViewCourse} />
        </div>

    );
}

export default withRouter(CoursePage);
