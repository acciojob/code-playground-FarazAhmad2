import React, { useState } from "react";
import "./../styles/App.css";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Login from "./Login";

const App = () => {

  const [auth, setAuth] = useState(false)

  const handleLogin = (e)=> {
    setAuth(!auth)
  }

  return (
    <div className="main-container">
      <p>{!auth ? 'You are not authenticated, Please log in first' : 'Logged in, Now you can enter Playground'}</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Playground</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute auth={auth}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login auth={auth}  handleLogin={handleLogin} />} />
      </Routes>
    </div>
  );
};

export default App;