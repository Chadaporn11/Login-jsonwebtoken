//rafce
import React, { useState } from 'react';
// function
import { register } from '../../functions/auth';
import { toast } from 'react-toastify';


const Register = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    password1: ""
  })

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    if (value.password !== value.password1) {
      toast.error("Password not match");
    } else {
      //code
        register(value)
        .then((response) => {
          console.log(response);
          console.log(response.data);
          toast.success(response.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          toast.error(err.response.data);
        });
    }
  };




  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange}></input>
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange}></input>
        <label>Confirm Password</label>
        <input type="text" name="password1" onChange={handleChange}></input>
        <button disabled={value.password.length < 6}>Submit</button>
      </form>
    </div>
  )
}

export default Register