import React, { InputHTMLAttributes } from 'react';

import './form-input.styles.scss';

interface FormInputProps extends InputHTMLAttributes<any> {
  id: string;
  name: string;
  label: string;
  value: string;
  type: 'text' | 'email' | 'password';
  handleChange({ target }: { target: any }): void;
  required?: boolean;
}

const FormInput = ({
  handleChange,
  label,
  ...formInputProps
}: FormInputProps) => (
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
