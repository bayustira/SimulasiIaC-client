import axios from "axios";

const instance = axios.create({
    baseURL: 'https://simulasi-iac-backend.herokuapp.com',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
export default instance;