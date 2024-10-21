import React from "react";
import { HashRouter as Router, Route,Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Loginpage from "./Pages/LoginPage/Loginpage";

export default function App() {
  return (
    <>
      <Router>
  
        <Routes>
          {/* Unauthenticated Routes */}
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>
     
    </Router>
    </>
    
  );
}
