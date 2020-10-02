import  React, { Component } from  'react';
import MeasurementsService from '../measurementsService/MeasurementsService.js';

const measurementsService = new MeasurementsService();

class  MeasurementsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        measurements: [],
    };
}

componentDidMount() {
    let  self  =  this;
    measurementsService.getMeasurements().then(function (result) {
        self.setState({ measurements: result })
    });
}


    render() {
	console.log(this.state.measurements);
	return (
	    <div>
		<h2>{this.state.measurements.name}</h2>
		<h2>{this.state.measurements.temperature}</h2>
		<h2>{this.state.measurements.humidity}</h2>
	    </div>
        );
}
}

export  default  MeasurementsList;
