import Register from './components/pages/auth/Register';
import Login from './components/pages/auth/Login';
import Navbar from './components/layouts/Navbar';

import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/*<Register/>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
