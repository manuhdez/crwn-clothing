import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...formInputProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...formInputProps} />
    {label && (
      <label
        className={`${
          formInputProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
