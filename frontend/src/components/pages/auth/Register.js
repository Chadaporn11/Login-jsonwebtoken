//rafce
import React, { useState } from 'react';
// function
import { register } from '../../functions/auth';

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
        if (value.password !== value.password1) {
            alert("Passwords do not match");
        } else {
            register(value)
                .then((res) => {
                    //send backend compeletes : get response from server
                    console.log(res);
                }).catch((err) => {
                    //get error from server
                    console.log(err.response.data);
                    alert(err.response.data);
                });
        }

    }




    return (
        <div>
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