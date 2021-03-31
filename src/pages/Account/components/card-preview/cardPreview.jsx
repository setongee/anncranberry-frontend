import React from 'react';
import './cardPreview.scss'
import Tracking from '../../../../assests/icons/tracking.svg'
import {ReactComponent as Arrow} from '../../../../assests/icons/card-arrow-right.svg'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectEnrolledCourse} from '../../../../redux/academy/academy.selectors'
import {Link} from 'react-router-dom'

const CardPreview = ({data, enrolled}) => {

    const {title, value, darker, icon, iconAlt, url, urlAlt } = data

    if (title === "My Courses"){

        data.value = enrolled.length;
        
    }

    return (
        <div className="card-preview">
            <div className={`${darker ? 'darker' : ''} card`}>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="value">{value}</div>
                </div>
                <div className="content">

                    <div className="image">
                        <img src={Tracking} alt=""/>
                    </div>

                    <Link style = {{color : '#fff'}} to = {`${value !== 0 ? url : urlAlt}`}>
                        <div className="action">{value !== 0 ? icon : iconAlt} <Arrow style = {{marginLeft : '10px'}}/></div>
                    </Link>

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    enrolled : selectEnrolledCourse
})

export default connect(mapStateToProps)(CardPreview);
