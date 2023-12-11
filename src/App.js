
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Team from './components/Team';
import ForgetPasswordPage from './components/ForgetPasswordPage';


function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="team" element={<Team/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forget-password" element={<ForgetPasswordPage/>} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
