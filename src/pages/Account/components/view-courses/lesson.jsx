import React from 'react';

const Lesson = ({prop, handleSelect, currentID}) => {

    return (

        <div className={`lesson ${prop.id === currentID ? 'active' : ''}`} onClick = {() => handleSelect(prop)}>

            <div className="thumb">
                <img src={prop.thumb} alt=""/>
            </div>

            <div className="lesson-topic">
                {prop.title}
            </div>

        </div>
    );
}

export default Lesson;
