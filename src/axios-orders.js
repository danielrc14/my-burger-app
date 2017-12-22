import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bce39.firebaseio.com/'
});

export default instance;