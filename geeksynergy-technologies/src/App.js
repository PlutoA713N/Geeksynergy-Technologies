import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./components/Home.js"
import UserSignup from "./components/UserSignup";
import Login from "./components/Login";
import MovieList from "./components/MovieList.js";
import CompanyInfo from "./components/CompanyInfo.js";
import Navbar from "./components/Navbar.js";

const App = () => {
  return(
    <Router>
      <div>
         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/companyInfo" element={<CompanyInfo />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;