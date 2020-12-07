import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

class FormMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                userName: '',
                date: '',
                content: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({content: event.target.value});
        var userId = firebase.auth().currentUser.uid;
        
        firebase.database().ref('/users/' + userId +'/userName').once('value').then((snapshot) => {
          var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          this.setState({userName:username})
        });
        
      }
      

       
      handleSubmit(event) {
        this.props.handleInputChild(this.state);
        event.preventDefault();

        this.setState({
            content: ''
        })
      }

      chackIfOver140Char(){
        
        if(this.state.content.length === 0){
            return(
                <Button style={{
                    float: 'right'
                }} variant="primary" disabled>
                Tweet
                </Button>
            )
            
        }
        
        
        else if(this.state.content.length < 140){
            return(
                <Button onClick={this.handleSubmit} style={{
                    float: 'right'
                }} variant="primary">Tweet</Button>
            )
        }
        
        else{
            return(
                <>
                <Alert style={{textAlign:'center'}} variant={'danger'}>
                    The tweet can't contain more then 140 chars.
                </Alert>
                <Button style={{
                    float: 'right'
                }} variant="primary" disabled>
                Tweet
                </Button>
                </>
                
            )
        }
        
      }

  render(){
    return (
      <>
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control value={this.state.content} onChange={this.handleChange} placeholder="What you have in mind..." as="textarea" rows={6} 
        style={{
              background: '#15202B',
              color: 'white'
              
              
        }}/>
        
        </Form.Group>
        </Form>
        
        {this.chackIfOver140Char()}
      </>
    );
  }
  
  
}

export default FormMe;