import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:9000/'
})

export const privateCall = axios.create({
    baseURL: 'http://localhost:9000/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('accessToken')
    }
})