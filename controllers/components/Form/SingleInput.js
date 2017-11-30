import React from 'react';
import PropTypes from 'prop-types';

export const SingleInput = (props) => (  
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <input
      className="form-control"
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc} />
  </div>
);

SingleInput.PropTypes = {  
  inputType: PropTypes.oneOf(['text', 'number','date','email','time']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired
};

