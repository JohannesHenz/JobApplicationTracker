// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar/index.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index.tsx";
import About from "./pages/about.tsx";
import SignUp from "./pages/signup.tsx";
import Login from "./pages/login.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
