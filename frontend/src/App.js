import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Switch has been replaced with Routes
  Route,
} from "react-router-dom"; // npm i react-router-dom
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Customize from "./pages/Customize/Customize";
import Request from "./pages/Request/Request";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/customize" exact element={<Customize />} />
        <Route path="/request" exact element={<Request />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
