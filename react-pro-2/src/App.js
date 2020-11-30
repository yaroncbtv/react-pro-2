import './App.css';
import React from 'react';
import NavbarMe from './Components/NavbarMe';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormMe from './Components/FormMe';
import CardMe from './Components/CardMe';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  

    this.handleInputChild = this.handleInputChild.bind(this);
  }

  handleInputChild(user){
      let tweet = {
          userName: 'Yaron',
          date: new Date().toLocaleString('he-IL'),
          contact: user.contact
      }
      let tweets = this.state.tweets;
      
      tweets.unshift(tweet);
      
      this.setState({
        tweets: tweets
      });
  }

  render(){
    
    
    return (
      <>
      <Container >
      <Row>
        <Col>
        <NavbarMe/>
        </Col>
      </Row>

      <Row>
        <Col>
        <FormMe handleInputChild = {this.handleInputChild}/>
        </Col>
      </Row>

      <Row>
        <Col>
        <CardMe tweets = {this.state.tweets}/>
        
        </Col>
      </Row>


      
      </Container>
      </>
    );
  }
  
  
}

export default App;
