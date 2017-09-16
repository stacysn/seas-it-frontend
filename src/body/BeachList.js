import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import BeachPage from './BeachPage'

class BeachList extends Component {
  constructor(props){
    super(props)
    this.state = {
      beachName: '',
      beachLat: '',
      beachLong: '',
      time: [],
      swell: [],
      tide: [],
      wind: [],
      beachSpotList: [],
      selectedBeach:null
    }
    this.loadBeaches = this.loadBeaches.bind(this);
  }
    // let map;
    // $(document).ready(function() {
    //   initMap();
    //   getBeach();
    //
    // initMap = () => {
    //   map = new google.maps.Map(document.getElementById('map'),{
    //     center: {lat: 36.9741, lng: -122.0308},
    //     zoom:8x
    //   });
    // };
    componentWillMount(){
      this.loadBeaches()
    }

    loadBeaches() {
      [1,2,3,4].forEach( (beach) => {
        let beachURL = `https://cors-anywhere.herokuapp.com/http://api.spitcast.com/api/spot/forecast/${beach}`
         $.get(beachURL, (res) => {
           console.log("RES", res)
            this.setState({ beachSpotList : [...this.state.beachSpotList, res[0].spot_name] })
          });
      });
    }

    selectedBeach = (event) => {
        if (this.state.beachSpotList[0]){
          console.log("Pleasure Point!");
        } else if (this.state.beachSpotList[1]) {
          console.log("Steamer Lane")
        } else {
          console.log("hi");
        }
    }

    render(){
      if (this.state.selectedBeach === null) {
        return (
          <div className="list-group teal lighten-2 center">
            <h1> Santa Cruz Popular Beaches </h1>
              <h3><a href="#" className="list-group-item-action teal lighten-2" onClick={this.selectedBeach}>{this.state.beachSpotList[0]}</a></h3>
              <h3><a href="#" className="list-group-item-action teal lighten-2" onClick={this.selectedBeach}>{this.state.beachSpotList[1]}</a></h3>
              <h3><a href="#" className="list-group-item-action teal lighten-2" onClick={this.selectedBeach}>{this.state.beachSpotList[2]}</a></h3>
              <h3><a href="#" className="list-group-item-action teal lighten-2" onClick={this.selectedBeach}>{this.state.beachSpotList[3]}</a></h3>
              <a className="waves-effect waves-light btn-large" href="#">Wave</a>
          </div>
        )
      } else if (this.state.selectedBeach === 0) {
        return (
          <BeachPage beachSpotList={this.state.beachSpotList[0]} />
        );
      } else if (this.state.selectedBeach === 1) {
          return(
          <BeachPage beachSpotList={this.state.beachSpotList[1]} />
          )
        }
          else if (this.state.selectedBeach ===2) {
          return (
            <BeachPage beachSpotList={this.state.beachSpotList[2]} />
          )
        }
          else if (this.state.selectedBeach === 3) {
          return (
            <BeachPage beachSpotList={this.state.beachSpotList[3]} />
          )
        }

      }

}


export default BeachList;
// <li><a onClick={this.props.toggleSignupModal}>Sign Up</a></li>

// console.log("responseData", res[1].latitude);
// this.setState({beachLat : res[1].latitude})
// console.log("beach Lat", this.state.beachLat);
