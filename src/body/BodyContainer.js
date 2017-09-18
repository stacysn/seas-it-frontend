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
          <h3> Check out the best conditions in Santa Cruz </h3>
          <h3> Chat with fellow surfers for tips and make new friends </h3>
          <h3> Seas the day </h3> 
        </div>
      )
  }
    return (
      <BeachList />
    )
  }
}

export default BodyContainer;
