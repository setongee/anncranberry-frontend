import React from 'react';
import './sign-in-sign-up.styles.scss'
import SignUp from '../../components/signup/signup.component'
import Container from '../../components/container/container.component'
import SignIn from '../../components/signin/signin.component'

const SignInAndSignUp = () => {
    return (
        <Container>
            <div className='sign-page'>
                <SignIn/>
                <SignUp/>
            </div>
        </Container>
    );
}

export default SignInAndSignUp;
