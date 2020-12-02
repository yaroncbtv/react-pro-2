import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarMe from './NavbarMe';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './Fire';

class Login extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            successLogin: null

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
        this.props.loginChildeState(this.state);
        // console.log(this.state.email);
        // console.log(this.state.password);

        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            this.setState({successLogin:true})
            console.log(user)
        })
        .catch((error) => {
            this.setState({successLogin:false})
            var errorCode = error.code;
            var errorMessage = error.message;
  });


        event.preventDefault();
      }

  render(){
    let successLogin = this.state.successLogin;
    if (successLogin) {
        successLogin = <Alert variant={'success'}>
        Login Success.
      </Alert>
    } if(successLogin === false){
        successLogin =  <Alert variant={'danger'}>
        Login faild Email or Password not Coorect.
        </Alert>
    }
    return (
      <>
       
       <Container >
       <h1 style={{color:'white'}}>Login</h1>
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
            Login
        </Button>
        </Form>

        <Nav defaultActiveKey="/login" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/createuser">New here ? Click to Create user</Nav.Link>
        </Nav.Item>
        </Nav>
        {successLogin}
        </Container>
      </>
    );
  }
  
  
}

export default Login;