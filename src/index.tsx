import'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import "./index.css";
import React from 'react';
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import NavBar from "./components/NavBar/Navbar";
import "./App.css";


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element={<div>Hello World</div>} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  </BrowserRouter>
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);