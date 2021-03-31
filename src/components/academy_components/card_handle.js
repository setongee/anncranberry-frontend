import React from 'react';

const CardHandle = ({course, history, match, id}) => {

    console.log(course)

    return (

        <div className="card">

            <div className="image">
                <img src={course.imgUrl} alt=""/>
            </div>

            <div className="details">
                <div className="title">{course.title}</div>
                <div className="subtitle">{course.subtitle_summary}</div>
            </div>

            <div className="activity">
                <div className="price">N{course.price}</div>
                <div className="enroll"  onClick = { ()=> history.push(`${match.url}/${id}`)} >Enroll Now</div>
            </div>

        </div>
    );
}

export default CardHandle;
