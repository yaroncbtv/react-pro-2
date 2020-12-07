import React from 'react';
import NavbarMe from './NavbarMe';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
class UserName extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            alert:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({userName: event.target.value});
        
      }
    
      handleSubmit(event) {
       this.setState({alert:true})
       firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          firebase.database().ref('users/' + user.uid + '/userName').set({
            username: localStorage.getItem('UserName'),
            email: 'email',
            profile_picture : 'imageUrl'
          });
      
      
          console.log("User is signed in.");
        } else {
           console.log("No user is signed in.");
      
        }
      });
       
       this.props.userNamePage2(this.state.userName);
       localStorage.setItem('UserName', this.state.userName);
  
       event.preventDefault();
        this.setState({userName:''})
        
      }
    render(){
      return (
        <>
        <Container>
        <NavbarMe/>
          <div style={{color:'white'}}>
          <h1 style={{marginTop:'30px',marginBottom:'30px'}}>UserName</h1>

        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control value={this.state.userName} onChange={this.handleChange} style={{background:'#15202B', color:'white'}} type="text"/>
            </Form.Group>
        </Form>
        <Button onClick={this.handleSubmit} style={{float:'right'}} variant="primary">save</Button>
        
        
        {this.state.alert
        ? <Alert style={{width:'80%',textAlign:'center'}} variant={'success'}>
        Your name has been successfully saved.
        </Alert>
        : <></>
        
        }
        </div>
          
        </Container>
          
        </>
      );
    }
    
    
  }
  
  export default UserName;