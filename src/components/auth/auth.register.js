import React from 'react';
import './auth.scss';
import {createUserCourseData} from '../../db/db'
import { auth } from '../../firebase/firebase.utils'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'



class RegisterCourse extends React.Component {

    constructor ({ history, program, currentUser, enrolled, courseData}) {

        super ();

        this.state = {

            email : '',
            password : '',
            confirmPassword : '',
            firstname : '',
            lastname : '',
            history : history,
            program : program,
            currentUser : currentUser,
            enrolled : enrolled,
            courseData : courseData

        }
    }
    
    handleSubmit = async e => {
       
        e.preventDefault();

        const {firstname, lastname, enrolled, email, password, confirmPassword, courseData } = this.state;

        if (password !== confirmPassword) {

            alert("passwords don't match")

            return;
        }

        try {
            
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserCourseData( user, firstname, lastname, enrolled, courseData ).then(() => this.state.history.push('/courses/enrolled/offline'))

            this.setState ( {
                firstname : '',
                lastname : '',
                email : '',
                password : '',
                confirmPassword : ''
            } )

        } catch (error) {

            console.log(error);

        };
    }

    handleChange = async e => {

        const { value, name } = e.target;
        this.setState ( { [name] : value } );
    }


    render(){

        return (
                
            <div className="user-auth_login">

                <div className="user-auth_form_body">

                    <div className="user-auth_form_header">
                        <div>
                            
                            <div className="ann_cran_logo">
                                <img src="https://anncranberry.com/img/ann-logo.png" alt="ann cranberry logo"/>
                            </div>

                        </div>
                    </div>

                    <div className="user-auth_form_container">

                        <form onSubmit = {this.handleSubmit} >

                            <div className="user-auth_input_area">

                                <input 

                                    type= 'text'
                                    name = 'firstname' 
                                    placeholder = 'Enter your firstname' 
                                    value = {this.state.firstname} 
                                    onChange = {this.handleChange} 
                                    required
                                    autoFocus
                                    
                                />

                                <input 

                                    type= 'text'
                                    name = 'lastname' 
                                    placeholder = 'Enter your lastname' 
                                    value = {this.state.lastname} 
                                    onChange = {this.handleChange} 
                                    required
                                    
                                />

                                <input 

                                    type= 'email'
                                    name = 'email' 
                                    placeholder = 'Enter your email address' 
                                    value = {this.state.email} 
                                    onChange = {this.handleChange} 
                                    required
                                    
                                />

                                <input 

                                    type= 'password'
                                    name = 'password' 
                                    placeholder = 'Enter your password' 
                                    value = {this.state.password} 
                                    onChange = {this.handleChange} 
                                    required

                                />

                                <input 

                                    type= 'password'
                                    name = 'confirmPassword' 
                                    placeholder = 'confirm your password' 
                                    value = {this.state.confirmPassword} 
                                    onChange = {this.handleChange} 
                                    required

                                />

                                <button type = 'submit'>Register</button>

                            </div>

                        </form>

                        <div className="user-auth_main-site" onClick = { () => this.props.showLogin() }>

                            Have an account? <strong>Login here</strong>

                        </div>

                    </div>

                </div>
                
                <div className = 'close_here' onClick = { () => this.props.closeModal() } > <p> X </p> </div>

            </div>
        
        )
        
    }

}

const mapsStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
});


export default connect(mapsStateToProps, null)(withRouter(RegisterCourse));
