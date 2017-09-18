import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import $ from 'jquery'


class Chart extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     chartData: {
  //       labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
  //       '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', 'midnight'],
  //       datasets: [
  //         {
  //           label: 'Size of Waves in Feet',
  //           data: []
  //         }
  //       ]
  //     }
  //   }
  // }

  // componentWillMount(){
  //   this.loadBeach()
  // }
  //
  // loadBeach(){
  //   let beachURL = `https://cors-anywhere.herokuapp.com/http://api.spitcast.com/api/spot/forecast/1`
  //   $.get(beachURL, (res) => {
  //     let sizeArr = []
  //       for (let i = 0; i < res.length; i++){
  //         sizeArr.push(res[i].size_ft)
  //         // console.log("Size feet array", sizeArr);
  //       }
  //       this.setState({ chartData: sizeArr})
  //       console.log("DATA",this.state.chartData);
  //   })
  // }
  //
  // static defaultProps = {
  //   displayTitle: true,
  //   displayLegend: true,
  //   legendPosition: 'right'
  // }
  render(){
    console.log(this.props.data);
    return (
      <div className="chart">
        <Bar
          ref='chart'
        	data={this.props.data}
        	options={{
            title: {
              display: true,
              text: 'Predicted Surf Height',
              fontSize: 25,
            },
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: 'right'
            }
        	}}
        redraw />
      </div>
    )
  }
}

export default Chart;
