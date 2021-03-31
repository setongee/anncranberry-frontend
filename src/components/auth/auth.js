import React from 'react';
import './auth.scss';
import {updateUserEnrolled} from '../../db/db'
import { auth } from '../../firebase/firebase.utils'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'



class Login extends React.Component {

    constructor ({ history, program, currentUser, enrolled, showRegister, courseData}) {

        super ();

        this.state = {

            email : '',
            password : '',
            history : history,
            program : program,
            currentUser : currentUser,
            enrolled : enrolled,
            showRegister : showRegister,
            courseData : courseData

        }
    }
    
    handleSubmit = async e => {

        e.preventDefault();

        const {email, password, enrolled, history, courseData} = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password)
                .then( data => {
                    updateUserEnrolled( data.user.uid, enrolled, courseData).then( () => history.push('/courses/enrolled/offline') )
                })

            this.setState ( { email : '', password : '' } )

        } catch (error) {

            await alert("Something Went Wrong!!! Invalid Email or Password")

        }
        
        
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

                                    type= 'email'
                                    name = 'email' 
                                    placeholder = 'Enter admin email address' 
                                    value = {this.state.email} 
                                    onChange = {this.handleChange} 
                                    required
                                    autoFocus
                                    
                                />

                                <input 

                                    type= 'password'
                                    name = 'password' 
                                    placeholder = 'Enter admin password' 
                                    value = {this.state.password} 
                                    onChange = {this.handleChange} 
                                    required
                                    autoFocus

                                />

                                <button type = 'submit'>Login</button>

                            </div>

                        </form>

                        <div className="user-auth_main-site" onClick = { () => this.props.showRegister() }>
                            Dont have an account? <strong>Register here</strong>
                        </div>

                    </div>

                </div>
                
                <div className = 'close_here' onClick = { () => this.props.closeModal() } > <p> X </p></div>

            </div>
        
        )
        
    }

}

const mapsStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
});


export default connect(mapsStateToProps, null)(withRouter(Login));
