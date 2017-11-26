import React, { Component } from 'react';
import axios from 'axios';
import Auth from "../modules/Auth"
import LogoutButton from "./LogoutButton"

class TestAuthentication extends Component {
    state = {  }
    render() {
        if(Auth.isUserAuthenticated()) {
            return (
                <div>
                    <div>Secret Message - Youre logged in</div>
                    <LogoutButton/>
                </div>
            );

        } else {
            return <div>Login to see the secret message</div>;
        }
    }
}

export default TestAuthentication;
