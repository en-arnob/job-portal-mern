import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/components/Nav";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import { UserContext } from "./hooks/UserContext";

function App() {
  const [value, setValue] = useState('hellow from context')

  return (
    <Router>
      <UserContext.Provider value={{value, setValue}}>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/reg" exact element={<RegistrationPage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
       </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
