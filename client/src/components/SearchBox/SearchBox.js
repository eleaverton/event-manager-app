import React from "react";


export class SearchForm extends Component {
  constructor(props){
    super(props);
      //set the component's initial state
      this.state = { 
        title: ""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
  }
  


  handleInputChange = event => {
    //getting the value and name of the input that triggers the change
    const {name, value} = event.target;

    //update the input's state
    this.setState({
      [name]: value
    });
  }; //closes handleInPutChange

handleFormSubmit = event => {
  //prevent default behaviour of form submit
  event.preventDefault();
  
  //API magic here
  
}

}; //closes Form extends Component

render(){
  return (
    <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Search for Your Next Event</h3>
            </div>
            <div className="panel-body">
              <div>
              <div className="form-group">
                 <input type="text" className="form-control" placeholder="Search" />
              </div>
                <button type="submit" className="btn btn-default" onClick={props.handleFormSubmit}>
                  Search
                </button>
              </div>
            </div>
          </div>
);

}