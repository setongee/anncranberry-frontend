import React from 'react';
import offline from '../../assests/img/offline_course.jpg'

const ChooseType = ({title, subtitle, close, closeModal, state}) => {
    return (

        <div className="body">
            <div className="choice">
                <div className="image">
                    <img src={offline} alt=""/>
                </div>
                <div className="title">
                    <h1>{title} courses </h1>
                </div>
                <p>{subtitle}</p>
                <button onClick = {() => state.history.push(`academy/${title}/courses`) } >View {title} courses</button>
            </div>

            { close ? 
                <div className="close_btn" onClick = { () => closeModal() } >X</div>
                : null
            }

        </div>
        
    );
}

export default ChooseType;
