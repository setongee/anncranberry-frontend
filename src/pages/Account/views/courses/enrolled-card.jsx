import React from 'react';
import {ReactComponent as Go} from '../../../../assests/icons/arrow-right.svg'

const EnrolledCard = ({courses, history, currentUser}) => {

    const {imgUrl, subtitle_summary, title, uid} = courses;
    
    return (
        <div className="card">

            <div className="image">
                <img src={imgUrl} alt=""/>
            </div>

            <div className="details">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle_summary}</div>
            </div>

            <div className="activity">
                <div className="enroll"  onClick = { ()=> history.push(`/courses/${currentUser}/${uid}`) } >Continue Course</div>
                <Go/>
            </div>

        </div>
    );
}

export default EnrolledCard;
