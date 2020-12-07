import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Nav from 'react-bootstrap/Nav';
import NavbarMe from './NavbarMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './Fire';
import ClipLoader from "react-spinners/SyncLoader";

class CreateUser extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            successCreateUser: null,
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
      this.props.CreateUserChildeState(this.state.successCreateUser);
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
          console.log(user)
          this.setState({successCreateUser:true})
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          this.setState({successCreateUser:false})

         
        });
      

        
        this.setState({loading:false})
      }, 1000);
        
        
        
        
        event.preventDefault();
      }

  render(){
    let successCreateUser = this.state.successCreateUser;
    if (successCreateUser) {
      successCreateUser = <Alert variant={'success'}>
        Create user Success, go to login Page: 
        <Nav>
        <Nav.Item>
      <Nav.Link href="/">Login</Nav.Link>
      </Nav.Item>
        </Nav>
      </Alert>
    } if(successCreateUser === false){
      successCreateUser =  <Alert variant={'danger'}>
        Create User Faild Email or Password is not valid.<br/>Try: <br/>Email: xxxx@xxxx.com <br/> Password: 123456
        </Alert>
    }
    return (
      <>
       
       <Container >
       <div style={{display:'flex',justifyContent:'center'}}>
       <div style={{marginTop:'50px'}} class="shadow-lg p-3 mb-5  rounded">
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
        
        <Button onClick={this.handleSubmit} variant="primary" type="submit">
            Create User
        </Button>
        
        </Form>

        <Nav as="ul">
        <Nav.Item as="li">
        <Nav.Link href="/">Already registered ? Click to Login</Nav.Link>
        </Nav.Item>
        </Nav>
        <div style={{textAlign:'center'}}>
        <ClipLoader
          color={"green"}
          loading={this.state.loading}/>
        </div>
        {successCreateUser}
        </div>
        </div>
        </Container>
      </>
    );
  }
  
  
}

export default CreateUser;