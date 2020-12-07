import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarMe from './NavbarMe';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './Fire';
import ClipLoader from "react-spinners/SyncLoader";

class Login extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            successLogin: null,
            isLogin: false,
            loading: false


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
        
        this.setState({loading:true})
    setTimeout(() => {
      
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            this.setState({successLogin:true})
            this.setState({isLogin:true});
            this.props.loginChildeState(this.state);
        })
        .catch((error) => {
            this.setState({successLogin:false})
            var errorCode = error.code;
            var errorMessage = error.message;
        });

        this.setState({loading:false})
      }, 1000);

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
        Login faild Email or Password not correct.
        </Alert>
    }
    return (
      <>
       
       <Container >
       <div style={{display:'flex',justifyContent:'center'}}>
       <div style={{marginTop:'50px'}} class="shadow-lg p-3 mb-5  rounded">
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
        
        <Button formaction="https://www.w3docs.com" onClick={this.handleSubmit} action="/home" variant="primary" type="submit">
          Login
        </Button>
        
        </Form>
        
        <Nav defaultActiveKey="/login" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/createuser">New here ? Click to Registered</Nav.Link>
        </Nav.Item>
        </Nav>
        <div style={{textAlign:'center'}}>
        <ClipLoader
          color={"green"}
          loading={this.state.loading}/>
        </div>
        
        {successLogin}
        </div>
        </div>
        </Container>
        
      </>
    );
  }
  
  
}

export default Login;