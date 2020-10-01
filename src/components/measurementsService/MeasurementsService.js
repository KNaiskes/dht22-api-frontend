import axios from 'axios';
const API_URL = 'http://localhost:8080/meausrements';

export default class MeasurementsService {

    constructor(){}

    getMeasurements() {
        return axios.get(API_URL).then(response => response.data);
    }
}
