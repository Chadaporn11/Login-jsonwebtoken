import React, { useState, useEffect } from 'react';

import Register from './components/pages/auth/Register';
import Login from './components/pages/auth/Login';
import Navbar from './components/layouts/Navbar';

import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import HomeAdmin from './components/pages/admin/Home';
import HomeUser from './components/pages/user/Home';
import { currentUser } from './components/functions/auth';

//redux
import { useDispatch } from 'react-redux';

//Route
import UserRoute from './components/routes/UserRoute';

function App() {

  const idtoken = localStorage.token;
  const dispatch = useDispatch();

  if (idtoken) {
    currentUser(idtoken)
      .then(res => {
        //code
        console.log(res.data);
        dispatch({
          type: 'LOGIN',
          payload: {
            token: idtoken,
            username: res.data.username,
            role: res.data.role,
          },
        });
      }).catch(err => {
        //err
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Navbar />
      {/*<Register/>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/index" element={<HomeAdmin />} />
        <Route path="/user/index" element={
          <UserRoute>
            <HomeUser />
          </UserRoute>} />
      </Routes>

    </div>
  );
}

export default App;
