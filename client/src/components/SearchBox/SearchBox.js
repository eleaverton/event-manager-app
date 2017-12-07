import React, {Component} from "react";
import API from "../../utils/API";


export class SearchBox extends Component {

  constructor(props){
    super(props);
      //set the component's initial state
      this.state = {
        title: ""
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }



  handleInputChange = (event) => {
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
  //API magic here
  API.getSearchedEvents(this.state.title)
    .then(res => {console.log(res);
          this.props.updateSearch(res.data);})
    .catch(err => console.log(err));

}

render(){
  return (
<div className="searchBox">
<div className="container">
  <div className="panel panel-default">      
          <div className="panel-body">
          <h1 className="tagline">Find your next event</h1>
              <div className="form-group">
                 <input name = "title" type="text" value = {this.state.title} className="form-control" placeholder="Search" onChange = {this.handleInputChange} />
              </div>
                <button type="submit" className="btn btn-default" onClick={this.handleFormSubmit}>
                  Search
                </button>
          </div>
  </div>
</div>
</div>
        )

      }


}; //closes Form extends Component
