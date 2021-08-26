import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './component/LoginButton';


class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '30rem' }}>
        <Card.Body>
        <card-text variant>BestBooks</card-text>

        <Card.Img variant="top" src="https://assets.website-files.com/5f4bb8e34bc82700bda2f385/602dce8695bc4565861baaf9_best%20books%20for%20web%20designer%20blog%20hero%20.jpg" />
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
          <LoginButton/>
        
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
