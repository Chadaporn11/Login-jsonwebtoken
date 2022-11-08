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