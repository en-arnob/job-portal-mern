import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/components/Nav";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/reg" exact element={<RegistrationPage />} />
        <Route path="/profile" exact element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
