import React, {Component} from "react";


class SearchBox extends Component {
  constructor(props){
    super(props);
      //set the component's initial state
      this.state = {
        title: ""
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }



  handleInputChange = event => {
    //getting the value and name of the input that triggers the change
    const {name, value} = event.target;

    //update the input's state
    this.setState({
      [name]: value
    });
  } //closes handleInPutChange

handleFormSubmit = event => {
  //prevent default behaviour of form submit
  event.preventDefault();
console.log("hello search box");
  //API magic here
  this.props.updateSearch("Onur");
}

render(){
  return (

<div className="container">
  <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Search for Your Next Event</h3>
            </div>
          <div className="panel-body">
              <div className="form-group">
                 <input type="text" className="form-control" placeholder="Search" />
              </div>
                <button type="submit" className="btn btn-default" onClick={this.handleFormSubmit}>
                  Search
                </button>
          </div>
  </div>
</div>
        )

      }


}; //closes Form extends Component


export default SearchBox;
