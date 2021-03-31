import React from 'react';
import './dash.scss'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

const Dashboard = ({currentUser, history}) => {

    const courseData = currentUser.course.offline;

    const filt = courseData.filter(paid => paid.paid === true)

    console.log(courseData);


    return (
       
       <div className = 'dashboard_offline' >

            <div className="stat-cards">

                <div className="stat--card">

                    <div className="icon_feather" style = {{ backgroundColor : 'red' }}> 

                    </div>

                    <div className="data_stat">

                        <p>Registered</p>    
                        <h1>{courseData.length}</h1>

                    </div>

                </div>

                <div className="stat--card">

                    <div className="icon_feather" style = {{ backgroundColor : 'blue' }}> 

                    </div>

                    <div className="data_stat">

                        <p>Purchased</p>    
                        <h1>{filt.length}</h1>

                    </div>

                </div>

                <div className="stat--card">

                    <div className="icon_feather" style = {{ backgroundColor : 'pink' }}> 

                    </div>

                    <div className="data_stat">

                        <p>Completed</p>    
                        <h1>0</h1>

                    </div>

                </div>

                <div className="stat--card">

                    <div className="icon_feather" style = {{ backgroundColor : 'teal' }}> 

                    </div>

                    <div className="data_stat">

                        <p>Pending</p>    
                        <h1>{courseData.length}</h1>

                    </div>

                </div>

            </div>

            <div className="mycourses">
                <h1>my courses</h1>

                <div className="course_offline">
                    
                    {
                        courseData.length ? (
                            courseData.map((data, index) => {
                                return (
                                    <div className="course" key = {index}>
                                        <div className="title"> <p> {index + 1}. </p> Ann Cranberry Offline Course - { data.course } program</div>
                                        <div className="viewDetails">{data.paid ? 'Paid' : 'Payment Pending'} - <strong>N{data.courseInfo.price}</strong></div>
                                    </div>
                                )
                            })
                        ) : <div className = 'noCourse' > <h1>sorry dear, you have no courses registered</h1> <div className="linkBtn" onClick = {()=> history.push('/academy/offline/courses')} >Register course now</div> </div>
                    }

                </div>
            </div>

        </div>

    );
}

const mapsStateToProps = (state) => ({

    currentUser : state.user.currentUser

})


export default connect(mapsStateToProps)(withRouter(Dashboard));
