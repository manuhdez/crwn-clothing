import React from 'react';
import { connect } from 'react-redux';

// import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectShowCartDropdown } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';
import { StoreState } from '../../redux/rootReducer';
import { Dispatch } from 'redux';
import { User } from '../../types';

interface HeaderProps extends HeaderState, HeaderActions {}

interface HeaderState {
  currentUser: User | null;
  showCartDropdown: boolean;
}

interface HeaderActions {
  signOut(): void;
}

const Header = ({ currentUser, showCartDropdown, signOut }: HeaderProps) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOut}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {showCartDropdown && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = (state: StoreState): HeaderState => ({
  currentUser: selectCurrentUser(state),
  showCartDropdown: selectShowCartDropdown(state)
});

const mapDispatchToProps = (dispatch: Dispatch): HeaderActions => ({
  signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
