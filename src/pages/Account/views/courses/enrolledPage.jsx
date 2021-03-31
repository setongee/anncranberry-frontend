import React from 'react';
import {withRouter, Route} from 'react-router-dom'
import Enrolled from './enrolled'

const EnrolledPage = ({match}) => {
    return (
       <Route path = {`${match.path}`} component = {Enrolled} />
    )
}

export default withRouter(EnrolledPage);
