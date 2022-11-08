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

export const changeRole = async (authtoken, value) => {
  return await axios.post("http://localhost:4200/api/change-role", value,
    {
      headers: {
        authtoken,
      },
    }
  );
}

export const removeUser = async (authtoken, id) => {
  return await axios.delete("http://localhost:4200/api/users/" + id,
    {
      headers: {
        authtoken,
      },
    }
  );
}

export const resetPassword = async (authtoken, id, value) => {
  return await axios.put("http://localhost:4200/api/users/" + id, value,
    {
      headers: {
        authtoken,
      },
    }
  );
}