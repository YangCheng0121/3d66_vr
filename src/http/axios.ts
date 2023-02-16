import axios from 'axios'
import api from "../config/api"



const Axios = axios.create({
  baseURL: api.default,
  timeout: 50000,
  // withCredentials: true
});


export default Axios