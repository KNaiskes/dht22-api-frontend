import axios from 'axios';
const API_URL = 'http://localhost:8080/measurements';

export default class HousesService{

    constructor(){}

    getMeasurements() {
        return axios.get(API_URL).then(response => response.data);
    }
}
