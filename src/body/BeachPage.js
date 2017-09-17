import React, { Component } from 'react';
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import BeachLlist from './BeachList'


class BeachPage extends Component {
  render(){
    return(
      <div className="beach-info teal lighten-2">
        <h1> {this.props.beachSpotList} </h1>
        <h4> Date: {this.props.date} </h4>
        <h4> Current Time: {this.props.currentTime} </h4>

      </div>
    )
  }
}

export default BeachPage;
