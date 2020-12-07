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
import firebase from 'firebase';

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
      hasAccount: false,
      isLogin: false,
      Anonymous: '',
      userUser: true
    }
    
    this.loginChildeState = this.loginChildeState.bind(this);
    this.userNamePage2 = this.userNamePage2.bind(this);
    this.handleInputChild = this.handleInputChild.bind(this);
  }



  listenForChange(){
    
    this.setState({loading:true})
    setTimeout(() => {
      this.db.ref('tweets').on('child_added', snapshot =>{
        let tweet = {
          id: snapshot.key,
          content: snapshot.val().content,
          date: snapshot.val().date,
          username: snapshot.val().userName
        }
       
        let tweets = this.state.tweets;
        tweets.unshift(tweet);
        this.setState({
          tweets: tweets
        });
      });
      
      
      


        
        this.setState({loading:false})
      }, 1000);
    
    
  }


  componentDidMount() {
    
    this.db = firebase.database();
    this.listenForChange();
    

  }

  handleInputChild(user){

    this.setState({loading:true})
    setTimeout(() => {
          const date = new Date();
      
    let tweet = {
          userName: user.userName,
          date: date.toISOString(),
          content: user.content
      }
     
      firebase.database().ref('tweets').push({
          content: tweet.content, 
          userName: tweet.userName, 
          date: tweet.date
    })
      
      
      
      


        
        this.setState({loading:false})
      }, 1000);
     
  }

  userNamePage2(userName){
    console.log(this.state)
    this.setState({userName:userName})
    
  }


  CreateUserChildeState(state){
    
    }
    
    
    

    loginChildeState(isLogin){
      
      this.setState({isLogin:isLogin})
      
     

    }



  render(){
    const override = css`
    display: flex;
    justify-content: center;
    margin: 0 auto;
  `;
  var user = firebase.auth().currentUser;
  
  //const islogin = this.state.isLogin;
  let resultLogin;
  
  if (user) {
    resultLogin =  <Router>
        <Switch>
        <Route exact path="/home">
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
    </Router>
  } 
  
  
  else {
    
    
       resultLogin = <Router>
      <Switch>
        <Route exact path="/">
        <Login loginChildeState = {this.loginChildeState}/>
        </Route>
        <Route path="/createuser">
          <CreateUser CreateUserChildeState = {this.CreateUserChildeState}/>
        </Route>
        </Switch>
        </Router>
     
      
    

  }


    return (
      <>
      {resultLogin}
      </>
    );
  }
  
  
}

export default App;
