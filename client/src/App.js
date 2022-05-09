import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginCandidates from "./pages/LoginCandidates";
import LoginClients from "./pages/LoginClients";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        {/* <Route path="/" exact element={<LoginCandidates />} /> */}
        <Route path="/" exact element={<LoginClients />} />
      </Routes>
    </Router>
  );
}

export default App;
