import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import Form, {
  FormTitle,
  FormError,
  FormBase,
  FormInput,
  FormSubmit,
  FormText,
  FormLink,
  FormTextSmall,
} from '../components/form';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { auth } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();

    return auth
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <FormTitle>Sign Up</FormTitle>
          {error && <FormError>{error}</FormError>}

          <FormBase onSubmit={handleSignup} method="POST">
            <FormInput
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <FormInput
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <FormInput
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <FormSubmit disabled={isInvalid} type="submit" data-testid="sign-up">
              Sign Up
            </FormSubmit>
          </FormBase>

          <FormText>
            Already a user? <FormLink to="/signin">Sign in now.</FormLink>
          </FormText>
          <FormTextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </FormTextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
