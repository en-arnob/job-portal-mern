import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/components/Nav";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { UserProvider } from "./hooks/UserContext";
import Profile from "./pages/protected/Profile";
import EditProfilePage from "./pages/EditProfilePage";

// import ProtectedRoute from "./ProtectedRoute";

function App() {

  return (
    <Router>
      <UserProvider>
        <Nav />
        <Routes>
          {/* <ProtectedRoute exact path='/profile' component={Profile} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/reg" exact element={<RegistrationPage />} />
          <Route path='/profile' exact element={<Profile/>} />
          <Route path="/editProfile" exact element={<EditProfilePage />} />
       </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
