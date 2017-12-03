import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { SingleInput } from "./SingleInput";
import "./Form.css";
import Auth from "../../modules/Auth";
import { Link } from 'react-router-dom';
import Modal from '../../../node_modules/react-bootstrap/lib/Modal';


export class LoginForm extends Component {
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
        Auth.authenticateUser(response.data.token, response.data.user);
        console.log(response.data.user);
        console.log(response.data.user.id);
        console.log(response.data.user._id);

        this.context.router.history.replace("/");
      })
      .catch(err => console.log(err));

    this.handleClearForm(event);
    this.props.closeModal();
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
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleFormSubmit}>
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

        </Modal.Body>
      </Modal>
    );
  }
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};
