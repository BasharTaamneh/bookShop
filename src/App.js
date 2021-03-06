import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
// import './App.scss';
import Footer from './Footer';
import BestBooks from './BestBooks'
import Profile from './component/profile';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    const { isAuthenticated, user } = this.props.auth0;
    console.log('app', this.props);
    console.log(isAuthenticated);
    console.log(user);
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {isAuthenticated ? <BestBooks /> : <Login />}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App)
