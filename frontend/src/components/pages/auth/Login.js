import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../../functions/auth';
//redux
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate(); //history

  const [value, setValue] = useState({
    username: "",
    password: "",
  })

  const roleBaseRedirect = (role) => {
    if(role === "admin") {
      navigate('/admin/index');
    }else{
      navigate('/user/index');
    }
  }

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(value)
      .then((response) => {
        console.log(response.data);
        toast.success(response.data);
        dispatch({
          type: 'LOGIN',
          payload: {
            token: response.data.token,
            username: response.data.payload.user.username,
            role: response.data.payload.user.role,
          },
        });
        localStorage.setItem('token',response.data.token);
        roleBaseRedirect(response.data.payload.user.role);
        
      }).catch((err) => {
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

export default Login;