import React, { Component } from 'react';
import BeachPostList from './body/BeachPostList.js';
import './App.css';
import './index.css';
import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      signUpFirstName: "",
      signUpLastName: "",
      password: "",
      userId: "",
      isLoggedIn: false,
      isSignInOpen: false,
      isSignUpOpen: false
    }
  }

  toggleSignupModal = () => {
    this.setState({isSignUpOpen: !this.state.isSignUpOpen})
  }


  render() {
    return (
      <div className="App list-group blue">
        <h1> Surf Away </h1>

        <BeachPostList />
      </div>
    );
  }
}

export default App;
