import React from 'react'
import Container from '../../components/container/container.component'
import ChooseLevel from '../academy_components/choose_level'
import CourseSelect from '../course-cards-section/course-cards'
import {Route} from 'react-router-dom'

const CourseView = ({ match }) => {
    
    return (
   
    <Container backgroundColor = '#fff'>
        
        <Route exact path={`${match.path}`} component = {ChooseLevel} />
        <Route path={`${match.path}/:level`} component = {CourseSelect} />

    </Container>
    
)}


export default CourseView;