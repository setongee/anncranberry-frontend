import React from 'react';
import PreviewCourse from '../../../../components/course-preview/previewCourse'

const CourseCard = ({courses, history, match, id, program}) => {

    return (

        courses.map (course => {

           return <PreviewCourse key = {id} selectedItem = {course} history = {history} program = {program} />

        })

        
    );
}

export default CourseCard;
