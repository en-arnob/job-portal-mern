import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/components/Nav";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import { UserProvider } from "./hooks/UserContext";

function App() {

  return (
    <Router>
      <UserProvider>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/reg" exact element={<RegistrationPage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
       </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
