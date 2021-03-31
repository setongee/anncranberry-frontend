import React from 'react';
import LoginUser from './loginUser'
import RegisterUser from './registerUser'

class Auth extends React.Component {

    constructor () {
        super();
        this.state = {

            showLogin : true
        }
    }

    showRegisterBar = () => {

        this.setState({showLogin : false})

    }

    showLoginBar = () => {

        this.setState({showLogin : true})

    }

    render () {
        return (
            this.state.showLogin ? (<LoginUser showRegister = {this.showRegisterBar} />) : (<RegisterUser showLogin = {this.showLoginBar} />)
        )
    }
}

export default Auth;
