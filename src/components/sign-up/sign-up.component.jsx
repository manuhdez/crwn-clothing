import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isUserSignedIn: false
    };
  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) alert(`Passwords don't match`);

    try {
      // this creates a new user reference and returns it into the user property
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // with our user ref created we send it to firestore to save it into our users collection
      await createUserProfileDocument(user, { displayName });
      // once the new user is saved into firestore we clear the form
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isUserSignedIn: true
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      isUserSignedIn
    } = this.state;

    if (isUserSignedIn) return <Redirect to="/" />;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleInputChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleInputChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
