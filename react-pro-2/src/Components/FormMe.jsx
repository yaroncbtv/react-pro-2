import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
class FormMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                userName: '',
                date: '',
                contact: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({contact: event.target.value});
      }
      
      handleSubmit(event) {
        this.props.handleInputChild(this.state);
        event.preventDefault();

        this.setState({
            contact: ''
        })
      }

      chackIfOver140Char(){
        if(this.state.contact.length < 140){
            return(
                <Button onClick={this.handleSubmit} style={{
                    float: 'right'
                }} variant="primary">Tweet</Button>
            )
        }else{
            return(
                <Button style={{
                    float: 'right'
                }} variant="primary" disabled>
                Tweet
                </Button>
            )
        }
        
      }

  render(){
    
    return (
      <>
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control value={this.state.contact} onChange={this.handleChange} placeholder="What you have in mind..." as="textarea" rows={6} 
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