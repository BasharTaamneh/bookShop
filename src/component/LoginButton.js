
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


function LoginButton() {
  const {isAuthenticated, loginWithRedirect,} = useAuth0();

  return !isAuthenticated && (
    <Button variant="primary" onClick={loginWithRedirect} >Log In</Button>
  );
}

export default LoginButton;