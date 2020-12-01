import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
class NavbarMe extends React.Component{
  
  render(){
    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/UserName">Profile</Nav.Link>
            </Nav>
        </Navbar>
      </>
    );
  }
  
  
}

export default NavbarMe;