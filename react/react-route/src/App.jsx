import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Nav from "./Nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
