import React, { Component } from 'react';
import Auth from "../modules/Auth";
import {Button} from "react-bootstrap";

class LogoutButton extends Component {
    constructor() {
        super()
        this.LogUserOut = this.LogUserOut.bind(this);
    }

    LogUserOut(e) {
        e.preventDefault();

        console.log("logging user out");
        Auth.deauthenticateUser();
        //this.props.history.replace("/");
        console.log(this);
    }

    render() {
        return (
            <Button onClick={this.LogUserOut}>Logout Button</Button>
        );
    }
}

export default LogoutButton;
