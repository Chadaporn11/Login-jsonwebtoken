import axios from 'axios';

export const listUser = async (authtoken) => {
    return await axios.get("http://localhost:4200/api/users",
      {
        headers: {
          authtoken,
        },
      }
    );
  }

  export const changeStatus = async (authtoken, value) => {
    return await axios.post("http://localhost:4200/api/change-status", value,
      {
        headers: {
          authtoken,
        },
      }
    );
  }