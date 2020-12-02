import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarMe from './NavbarMe';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateUser extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        };
    
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      handleChangePassword(event) {
        this.setState({password: event.target.value});
    }



      handleSubmit(event) {
        this.props.CreateUserChildeState(this.state);
        // console.log(this.state.email);
        // console.log(this.state.password);
        event.preventDefault();
      }

  render(){
   
    return (
      <>
       
       <Container >
       <h1 style={{color:'white'}}>Create User</h1>
       <Form style={{color:'white'}}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={this.state.email} onChange={this.handleChangeEmail} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={this.state.password} onChange={this.handleChangePassword} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={this.handleSubmit} variant="primary" type="submit">
            Create User
        </Button>
        
        </Form>

        <Nav as="ul">
        <Nav.Item as="li">
        <Nav.Link href="/login">Alradt Use ? Click to Login</Nav.Link>
        </Nav.Item>
        </Nav>
        </Container>
      </>
    );
  }
  
  
}

export default CreateUser;