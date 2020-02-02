import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';
import { Dispatch } from 'redux';
import { EmailSignUpData } from '../../types';

interface SignUpProps extends SignUpActions {}

interface SignUpActions {
  signUp(userData: EmailSignUpData): void;
}

const SignUp = ({ signUp }: SignUpProps) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userData;

  const handleInputChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;

    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) alert(`Passwords don't match`);

    signUp({
      displayName,
      email,
      password
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          id="displayName"
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleInputChange}
          label="Display Name"
          required
        />
        <FormInput
          id="email"
          type="email"
          name="email"
          value={email}
          handleChange={handleInputChange}
          label="Email"
          required
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          value={password}
          handleChange={handleInputChange}
          label="Password"
          required
        />
        <FormInput
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleInputChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): SignUpActions => ({
  signUp: (userData: EmailSignUpData) => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);
