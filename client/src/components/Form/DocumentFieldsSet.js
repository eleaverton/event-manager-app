import React, {Component} from 'react';  
import {SingleInput} from './SingleInput';
import "./Form.css";

export class DocumentInput extends React.Component {
  render() {
    return <SingleInput 
      type="text" 
      name={ `document-${ this.props.index }-document` } 
    />;
  }
}



