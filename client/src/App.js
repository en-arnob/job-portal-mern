import React, { createContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initialState, reducer } from "./pages/components/Utils/UseReducer";
import Home from "./pages/Home";
import Nav from "./pages/components/Nav";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { UserProvider } from "./hooks/UsersContext";
import Profile from "./pages/protected/Profile";
import EditProfilePage from "./pages/EditProfilePage";
import LogoutPage from "./pages/LogoutPage";
import JobView from "./pages/components/JobView";
import MyPostsPage from "./pages/MyPostsPage";
import AppliedJobs from "./pages/AppliedJobs";
import EmailVerify from "./pages/EmailVerify";

// import ProtectedRoute from "./ProtectedRoute";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <UserProvider>
          <Nav />
          <Routes>
            {/* <ProtectedRoute exact path='/profile' component={Profile} /> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/reg" exact element={<RegistrationPage />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/editProfile" exact element={<EditProfilePage />} />
            <Route path="/logout" exact element={<LogoutPage />} />
            <Route path="/jobView" exact element={<JobView />} />
            <Route path="/mypost" exact element={<MyPostsPage />} />
            <Route path="/appliedJobs" exact element={<AppliedJobs />} />
            <Route path="/verify/:userType/:userId/:token" exact element={<EmailVerify/>}/>
          </Routes>
        </UserProvider>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
