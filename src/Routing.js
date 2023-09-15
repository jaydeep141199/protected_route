import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { Protected } from "./components/Protected";
import Notfound from "./components/Notfound";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="product" element={<Products />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
