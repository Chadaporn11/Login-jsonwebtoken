import axios from 'axios';

export const register = async(value) => {
    
    return await axios.post("http://localhost:4200/api/register", value);
}

export const currentUser = async(authtoken) => {
    
    return await axios.post("http://localhost:4200/api/current-user", 
    {},
    {
        headers: {
            authtoken,
        },
    });
}

export const currentAdmin = async (authtoken) => {
    return await axios.post("http://localhost:4200/api/current-admin",
      {},
      {
        headers: {
          authtoken,
        },
      }
    );
  }

export const login = async(value) => {
    
    return await axios.post("http://localhost:4200/api/login", value);
}


