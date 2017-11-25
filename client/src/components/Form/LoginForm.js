import React, { Component } from "react";
import axios from "axios";
import { SingleInput } from "./SingleInput";
import "./Form.css";
import Auth from "../../modules/Auth";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();

    const formPayload = {
      email: this.state.email,
      password: this.state.password
    };
    //create post request with right data path
    console.log("Send this in a POST request:", formPayload);
    const {email, password } = this.state;
    axios
      .post("/login", { email, password })
      .then(response => {
        console.log(`Logged in successfully. Token: ${response.data.token}`)
        Auth.authenticateUser(response.data.token);
      })
      .catch(err => console.log(err));

    this.handleClearForm(event);
  }
  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form className="container" onSubmit={this.handleFormSubmit}>
            <h4> Login Form </h4>
            <SingleInput
              inputType={"email"}
              title={"Email"}
              name={"email"}
              controlFunc={this.handleInputChange}
              content={this.state.email}
            />
            <SingleInput
              inputType={"password"}
              title={"Password"}
              name={"password"}
              controlFunc={this.handleInputChange}
              content={this.state.password}
            />
            <input
              type="submit"
              className="btn btn-primary float-right"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
