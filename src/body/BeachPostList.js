import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import $ from 'jquery'

class BeachPostList extends Component {
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
      beachSpotList: []
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

    render(){
      return (
        <div>
          <h1> Beach Post List </h1>
          <h3>{this.state.beachSpotList[0]}</h3>
          <h3>{this.state.beachSpotList[1]}</h3>
          <h3>{this.state.beachSpotList[2]}</h3>
          <h3>{this.state.beachSpotList[3]}</h3>
        </div>
      );
    }
}

export default BeachPostList;

// console.log("responseData", res[1].latitude);
// this.setState({beachLat : res[1].latitude})
// console.log("beach Lat", this.state.beachLat);
