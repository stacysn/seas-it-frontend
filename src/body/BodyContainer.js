import React, { Component } from 'react';
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import BeachList from './BeachList'


class BodyContainer extends Component {
  render(){
    if (!this.props.isLoggedIn) {
      return(
        <div className='About App' >
          <h1> What is this app about? </h1>
        </div>
      )
  }
    return (
      <BeachList />
    )
  }
}

export default BodyContainer;
