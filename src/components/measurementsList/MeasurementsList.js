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
        self.setState({ measurements: result.data })
    });
}


render() {
    return (
	  <div>
	    {this.state.measurements.map( c =>


		    <div>
		    <h2>{c.name}</h2>
		    </div>

	    )}
	    </div>
        );
}
}

export  default  MeasurementsList;
