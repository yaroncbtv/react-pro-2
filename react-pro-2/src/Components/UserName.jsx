import React from 'react';
import NavbarMe from './NavbarMe';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
class UserName extends React.Component{
    constructor(props) {
        super(props);
        this.state = {userName: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({userName: event.target.value});
        
      }
    
      handleSubmit(event) {
    //    console.log('A name was submitted: ' + this.state.userName);
       this.props.userNamePage2(this.state.userName);
       event.preventDefault();
        this.setState({userName:''})
      }
    render(){
      return (
        <>
        <Container>
        <NavbarMe/>
          <div style={{color:'white'}}>
          <h1>UserName</h1>

        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control value={this.state.userName} onChange={this.handleChange} style={{background:'#15202B', color:'white'}} type="text"/>
            </Form.Group>
        </Form>
        <Button onClick={this.handleSubmit} style={{float:'right'}} variant="primary">save</Button>

          </div>
          
        </Container>
          
        </>
      );
    }
    
    
  }
  
  export default UserName;