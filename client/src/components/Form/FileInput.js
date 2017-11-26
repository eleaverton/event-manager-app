import React from 'react';
import PropTypes from 'prop-types';

export const FileInput = (props) => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <input className="form-control-file"
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.controlFunc} />
  </div>
);


FileInput.PropTypes = {
  type: PropTypes.oneOf(['text', 'file','date','email','time']).isRequired,
  title: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired
};
