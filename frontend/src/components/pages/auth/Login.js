import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../../functions/auth';



const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(value)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        toast.success(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data);
      });

  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange}></input>
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange}></input>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Login