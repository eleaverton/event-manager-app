import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { SingleInput } from "./SingleInput";
import "./Form.css";
import { Link } from 'react-router-dom';
import Auth from "../../modules/Auth";
import { FileInput } from "./FileInput";
import Modal from '../../../node_modules/react-bootstrap/lib/Modal';


const firebase = require("firebase");
const jwt = require("jsonwebtoken");



const config = {
  apiKey: "AIzaSyBzQgBrwi4n--HUeIHap9BInecSmfGZwSA",
  authDomain: "fantasyleague-932e1.firebaseapp.com",
  databaseURL: "https://fantasyleague-932e1.firebaseio.com",
  projectId: "fantasyleague-932e1",
  storageBucket: "fantasyleague-932e1.appspot.com",
  messagingSenderId: "300882421573"
};

firebase.initializeApp(config);
const storage = firebase.storage()
const storageRef = storage.ref();
var file;
var decode;





export class SignUpForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      zip: "",
      image:"",
      twitterHandle: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  //Need data path to not get error with fetch
  // componentDidMount(){
  // 	fetch()
  // 	.then(res => res.json())
  // 	.then(data =>{
  // 		this.setState({
  // 		firstName=data.firstName,
  // 		lastName=data.lastName,
  // 		dateOfBirth=data.dateOfBirth,
  // 		email=data.email,
  // 		zip=data.zip,
  // 		twitterHandle=data.twitterHandle
  // 		});
  // 	});
  // }
  handleInputChange(event) {
    const { name, value } = event.target;
    if (event.target.files){
      file = event.target.files[0];
      this.setState({image:file});
    }
    this.setState({
      [name]: value
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();

    const formPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBirth: this.state.dateOfBirth,
      email: this.state.email,
      zip: this.state.zip,
      twitterHandle: this.state.twitterHandle,
      password: this.state.password
    };


    //create post request with right data path
    console.log("Send this in a POST request:", formPayload);
    const { firstName, email, password, dateOfBirth, lastName, zip, twitterHandle } = this.state;
    axios
      .post("/signup", { email, password, name: firstName, lastName, dateOfBirth, zip, twitterHandle })
      .then(response =>{
        console.log(response);
        Auth.authenticateUser(response.data.token);

        jwt.verify(response.data.token, "a secret phrasesssssss!!", (err, decoded) => {
          // the 401 code is for unauthorized status
          decode = decoded.sub;
          storageRef.child(decode + "/" + file.name).put(file).then(function(snapshot) {
            console.log(snapshot);
          });
        });
      }).catch(err => console.log(err));
      console.log("hello");
      setTimeout(()=> {
        console.log(this);
        this.context.router.history.replace("/");
      },2000);
	    this.handleClearForm(event);
	    this.props.closeModal();
	};
	handleClearForm(event) {
	    event.preventDefault();
	    this.setState({
	      	firstName:'',
			lastName:'',
			dateOfBirth:'',
			email:'',
      password:'',
			zip:'',
			twitterHandle:''
	    });
	};
	render(){
		return(


			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
        		<Modal.Header closeButton>
          			<Modal.Title id="contained-modal-title-sm">Sign Up</Modal.Title>
        		</Modal.Header>
        		<Modal.Body>
					<form onSubmit={this.handleFormSubmit}>


						<SingleInput
							inputType={'text'}
							title={'First Name'}
							name={'firstName'}
							controlFunc={this.handleInputChange}
							content={this.state.firstName} />
						<SingleInput
							inputType={'text'}
							title={'Last Name'}
							name={'lastName'}
							controlFunc={this.handleInputChange}
							content={this.state.lastName} />
						<SingleInput
							inputType={'password'}
							title={'Password'}
							name={'password'}
							controlFunc={this.handleInputChange}
							content={this.state.password} />
						<SingleInput
							inputType={'date'}
							title={'Birthday'}
							name={'dateOfBirth'}
							controlFunc={this.handleInputChange}
							content={this.state.dateOfBirth} />
						<SingleInput
							inputType={'email'}
							title={'Email'}
							name={'email'}
							controlFunc={this.handleInputChange}
							content={this.state.email} />
						<SingleInput
							inputType={'number'}
							title={'Zip Code'}
							name={'zip'}
							controlFunc={this.handleInputChange}
							content={this.state.zip} />
						<SingleInput
							inputType={'text'}
							title={'Twitter Handle'}
							name={'twitterHandle'}
							controlFunc={this.handleInputChange}
							content={this.state.twitterHandle} />
            <FileInput
  							type={'file'}
  							title={'Upload Image'}
  							name={'image'}
                value={this.state.image}
                controlFunc={this.handleInputChange} />
						<input
					        type="submit"
					        className="btn btn-primary float-right"
					        value="Submit"/>
          // <small>Already have an account? <Link to={'/login'}>Log In</Link></small>

					</form>



				</Modal.Body>
			</Modal>

		);

	}
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};
