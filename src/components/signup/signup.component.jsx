import React from 'react';

import  { auth, createUserProfile } from '../../firebase/firebase.utils'
import FormInput from '../formInput/formInput.component'
import CustomButton from '../customButton/customButton.component'
import './signup.styles.scss'

class SignUp extends React.Component {

    constructor () {
        super()
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }  

    handleSubmit = async e => {
       
        e.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {

            alert("passwords don't match")

            return;
        }

        try {
            
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile( user, displayName, 'USER' );

            this.setState ( {
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            } )

        } catch (error) {

            console.log(error);

        };
    }

    handleChange = e => {

        const {name, value} = e.target;
        this.setState({ [name] : value })
    }


    render () {

        const {displayName, email, password, confirmPassword } = this.state;

        return (

            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>

                <form className="sign-up-form" onSubmit = {this.handleSubmit}>
                   
                    <FormInput
                        name = 'displayName'
                        type = 'text'
                        value = {displayName}
                        label = 'Display Name'
                        onChange = {this.handleChange}
                        required
                    />

                    <FormInput
                        name = 'email'
                        type = 'email'
                        value = {email}
                        label = 'Email'
                        onChange = {this.handleChange}
                        required
                    />

                    <FormInput
                        name = 'password'
                        type = 'password'
                        value = {password}
                        label = 'Password'
                        onChange = {this.handleChange}
                        required
                    />

                    <FormInput
                        name = 'confirmPassword'
                        type = 'password'
                        value = {confirmPassword}
                        label = 'Confirm Password'
                        onChange = {this.handleChange}
                        required
                    />
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>

        )
    }
}


export default SignUp;