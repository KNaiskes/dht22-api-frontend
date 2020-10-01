import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import './App.css';

import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import MeasurementsList from "./components/measurementsList/MeasurementsList.js";

function App() {
    return (
	<div>
	    <Navbar />

	    <BrowserRouter>
		<Route path="/" exact component={MeasurementsList} />
	    </BrowserRouter>

	    <Footer />
	</div>
    );
}

export default App;
