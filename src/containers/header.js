import React from 'react';
import Header, { HeaderFrame, HeaderLogo } from '../components/header';
import Button from '../components/button';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ showSignIn, children }) {
  return (
    <Header>
      <HeaderFrame>
        <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflix" />
        {showSignIn && (
          <Button to={ROUTES.SIGN_IN} element="link">
            Sign In
          </Button>
        )}
      </HeaderFrame>
      {children}
    </Header>
  );
}
