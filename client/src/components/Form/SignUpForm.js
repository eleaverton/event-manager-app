import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { SingleInput } from "./SingleInput";
import "./Form.css";
import { Link } from 'react-router-dom';
import Auth from "../../modules/Auth";
import { FileInput } from "./FileInput";
import Modal from '../../../node_modules/react-bootstrap/lib/Modal';
import {storage} from '../../firebase/fire';

const jwt = require("jsonwebtoken");
const storageRef = storage.ref("users/");
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
      imageName:'',
      imageUrl:'',
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
      this.setState({imageName:file.name});
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
      password: this.state.password,
      imageName: this.state.imageName,
      imageUrl: this.state.imageUrl
    };


    //create post request with right data path
    console.log("Send this in a POST request:", formPayload);
    console.log(this.state);
    const { firstName, email, password, dateOfBirth, lastName, zip, imageUrl, imageName, image, twitterHandle } = this.state;
    axios
      .post("/signup", { email, password, name: firstName, lastName, dateOfBirth, imageUrl, imageName, image, zip, twitterHandle })
      .then(response =>{
        console.log(response);
        Auth.authenticateUser(response.data.token, response.data.user);

        jwt.verify(response.data.token, "a secret phrasesssssss!!", (err, decoded) => {
          // the 401 code is for unauthorized status
          decode = decoded.sub;
          storageRef.child(decode + "/" + file.name).put(file).then((snapshot) => {
            console.log(snapshot.downloadURL);
            this.setState({imageUrl:snapshot.downloadURL});
            axios.put("/userImageUrl", {imageUrl: snapshot.downloadURL, id: decode}).catch(err => console.log(err));
          });
        });
      }).catch(err => console.log(err));
      setTimeout(()=> {
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
							title={'Password (must be at least 8 characters in length)'}
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

					</form>



				</Modal.Body>
			</Modal>

		);

	}
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};
