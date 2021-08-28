import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
class Footer extends React.Component {
  render() {
    return(
      
      <Navbar  className="footer" bg="dark" variant="dark" >
        <Navbar.Brand className="footerbrand">&copy; Best Books rendered by <a href="https://bashartaamnehportfolio.netlify.app/">Bashar Taamneh</a> </Navbar.Brand>
      </Navbar>
    
    );
  }
}

export default Footer;
