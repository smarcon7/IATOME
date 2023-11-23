// App.js
import React from "react";
import RegisterPage from './RegisterPage';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Science from "./pages/Science";
import Products from "./pages/Products";
import News from "./pages/News";
import ECG from "./pages/ECG";
import Payment from "./pages/Payment";

import About from "./pages/About";
import NavHeader from "./components/NavHeader";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavHeader />
      <div className="App">
        {/* <Header /> */}
        <RegisterPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/science" element={<Science />} />
          <Route path="/news" element={<News />} />
          <Route path="/report" element={<ECG />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
