import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

class NavbarMe extends React.Component{
  
  click(){
    
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  render(){
    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/username">Profile</Nav.Link>
            <Nav.Link style={{color:'red'}} onClick={this.click} href="/">Logout</Nav.Link>
            </Nav>
        </Navbar>
      </>
    );
  }
  
  
}

export default NavbarMe;