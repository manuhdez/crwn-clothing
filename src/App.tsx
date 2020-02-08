import React, { useEffect, lazy, Suspense } from 'react';
import { Dispatch } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { StoreState } from './redux/rootReducer';

import './App.scss';
import { User } from './types';

// Lazy loaded page components
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

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
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/signin" render={() => renderInSignInRoute} />
        </Switch>
      </Suspense>
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
