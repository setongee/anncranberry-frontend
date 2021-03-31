import React, { Component } from 'react';
import './signin.styles.scss';

import FormInput from '../formInput/formInput.component' 
import CustomButton from '../customButton/customButton.component'

import { auth } from '../../firebase/firebase.utils'


class Signin extends Component {
    
    constructor() {
        super()

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async e => {

        e.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState ( { email : '', password : '' } )

        } catch (error) {
            await alert("Something Went Wrong!!! Invalid Email or Password")
        }       
    }

    handleChange = async e => {

        const { value, name } = e.target;

        this.setState ( { [name] : value } );
    }

    render() {

        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        type="email" 
                        name="email" 
                        required 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label = "Email"
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        required 
                        value={this.state.password}
                        handleChange = {this.handleChange}
                        label = "Password"
                    />

                    <div className="button">
                        <CustomButton type="submit">Sign In</CustomButton>
                    </div>
                    
                </form>

            </div>
        );
    }
}

export default Signin;