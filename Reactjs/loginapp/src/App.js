// App.js
import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginApp from "./LoginApp";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    
    <Routes>
      <Route path="/" element={<LoginApp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
