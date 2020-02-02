import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { StoreState } from './redux/rootReducer';

import './App.scss';
import { User } from './types';

interface AppProps extends AppState, AppActions {}

interface AppState {
  currentUser: User | null;
}

interface AppActions {
  checkUserSession: () => void;
}

export const App = ({ currentUser, checkUserSession }: AppProps) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const renderInSignInRoute = currentUser ? (
    <Redirect to="/" />
  ) : (
    <SignInAndSignUpPage />
  );

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/signin" render={() => renderInSignInRoute} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: StoreState): AppState => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch: Dispatch): AppActions => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
