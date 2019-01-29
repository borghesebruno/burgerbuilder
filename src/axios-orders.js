import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-73e08.firebaseio.com/'
});

export default instance;