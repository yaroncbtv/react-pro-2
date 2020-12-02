import './App.css';
import React from 'react';
import NavbarMe from './Components/NavbarMe';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormMe from './Components/FormMe';
import CardMe from './Components/CardMe';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/SyncLoader";
import UserName from './Components/UserName';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateUser from './Components/CreateUser';
import Login from './Components/Login';
import fire from './Components/Fire';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
      userName: '',
      user: '',
      setEmailError:'',
      setPasswordError:'',
      email: '',
      password: '',
      hasAccount: false
    }
  
    this.userNamePage2 = this.userNamePage2.bind(this);
    this.handleInputChild = this.handleInputChild.bind(this);
  }


  componentDidMount() {
    this.setState({userName:localStorage.getItem('UserName')})
    axios.get(`https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet`)
      .then(res => {
        const tweets = res.data;
        this.setState({
            tweets: tweets.tweets
           });
      }) 
  }

  handleInputChild(user){
    
   
    
    
    this.setState({loading:true})
        
    setTimeout(() => {
          const date = new Date();

    let tweet = {
          userName: this.state.userName,
          date: date.toISOString(),
          content: user.content
      }
      let tweets = this.state.tweets;
      tweets.unshift(tweet);
      
      this.setState({
        tweets: tweets
      });
      axios.post('https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet', {
        content: tweet.content, 
        userName: tweet.userName, 
        date: tweet.date
        })
        .then(response => { 
          console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });

        this.setState({loading:false})
      }, 1000);
     
  }

  userNamePage2(userName){
    this.setState({userName:userName})
    
  }


  CreateUserChildeState(state){
    fire.auth().createUserWithEmailAndPassword(state.email, state.password)
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
    }

    loginChildeState(state){
      

    }



  render(){
    const override = css`
    display: flex;
    justify-content: center;
    margin: 0 auto;
  `;
  



    return (
      <>
      {/* <Router>
        <Switch>
          <Route exact path="/">
            
      <Container >
      <Row>
        <Col>
        <NavbarMe/>
        </Col>
      </Row>

      <Row>
        <Col>
        <FormMe handleInputChild = {this.handleInputChild}/>
        <ClipLoader
          css={override}
          color={"green"}
          loading={this.state.loading}/>
        </Col>
      </Row>

      <Row>
        <Col>
        <CardMe tweets = {this.state.tweets}/>
        </Col>
      </Row>
      </Container>
          </Route>
          <Route path="/username">
            <UserName userNamePage2 = {this.userNamePage2}/>
          </Route>
        </Switch>
    </Router> */}

        <Router>
        <Switch>
          <Route exact path="/login">
          <Login loginChildeState = {this.loginChildeState}/>
          </Route>
          <Route path="/createuser">
            <CreateUser CreateUserChildeState = {this.CreateUserChildeState}/>
          </Route>
          
    
    </Switch>
    </Router>
















      </>
    );
  }
  
  
}

export default App;
