import axios from 'axios';

const instance = axios.create({
    // The api (cloud function) URL
    baseURL: 'http://localhost:5001/store-1fe3d/us-central1/api' 
});

export default instance;