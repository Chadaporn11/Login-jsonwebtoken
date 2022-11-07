import axios from 'axios';

export const register = async(value) => {
    
    return await axios.post("http://localhost:4200/api/register", value);
}

export const login = async(value) => {
    
    return await axios.post("http://localhost:4200/api/login", value);
}