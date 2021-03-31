import React from 'react';
import {withRouter} from 'react-router-dom'
import EnrolledList from './enrolledList'

const EnrolledPage = ({match, user, history}) => {

    return (

        <div>

            <EnrolledList currentUser = {user} history = {history} match = {match} />

        </div>

    )

}

export default withRouter(EnrolledPage);
