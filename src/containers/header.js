import React from 'react';
import Header, { HeaderFrame, HeaderLogo, HeaderButtonLink } from '../components/header';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ showSignIn, children }) {
  return (
    <Header>
      <HeaderFrame>
        <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflix" />
        {showSignIn && <HeaderButtonLink to={ROUTES.SIGN_IN}>Sign In</HeaderButtonLink>}
      </HeaderFrame>
      {children}
    </Header>
  );
}
