import axios from 'axios';

export default () => {
    return axios.create({
        baseURL:'https://technical-test-frontend.herokuapp.com/api/'
    })
}