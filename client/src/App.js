import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/components/Nav";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
