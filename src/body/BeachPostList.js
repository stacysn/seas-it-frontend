import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import $ from 'jquery'

class BeachPostList extends Component {

  constructor(props){
    super(props)
    this.state = {
      beachLat: '',
      beachLong: '',
      time: [],
      swell: [],
      tide: [],
      wind: [],
      beaches: [1,2,3,4,5]
    }
  }

    // let map;
    // $(document).ready(function() {
    //   initMap();
    //   getBeach();
    //
    // initMap = () => {
    //   map = new google.maps.Map(document.getElementById('map'),{
    //     center: {lat: 36.9741, lng: -122.0308},
    //     zoom:8
    //   });
    // };


     componentWillMount(){

       this.state.beaches.forEach(function(beach){
         $.ajax({
           method: "GET",
           url: 'https://cors-anywhere.herokuapp.com/' + "http://api.spitcast.com/api/spot/forecast/" + beach,
           dataType: 'json',
           crossDomain: true,
         })
         .then(res => {
           console.log(res);
           res.forEach(function(taco){
             console.log(taco);
           }
          )
        })
       })
    };

    render(){
      return (
        <h1> Beach Post List </h1>
      );
    }
}

export default BeachPostList;





// console.log("responseData", res[1].latitude);
// this.setState({beachLat : res[1].latitude})
// console.log("beach Lat", this.state.beachLat);
