import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import './sign-in.styles.scss';
import { Dispatch } from 'redux';
import { EmailSignInData } from '../../types';

interface SignInProps extends SignInActions {}

interface SignInActions {
  googleSignIn(): void;
  emailSignIn(userData: EmailSignInData): void;
}

const SignIn = ({ emailSignIn, googleSignIn }: SignInProps) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userData;

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

    emailSignIn({ email, password });
  };

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          value={email}
          label="Email"
          handleChange={handleInputChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          value={password}
          label="Password"
          handleChange={handleInputChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): SignInActions => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (userData: EmailSignInData) =>
    dispatch(emailSignInStart(userData))
});

export default connect(null, mapDispatchToProps)(SignIn);
