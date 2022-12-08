import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Notes from "../pages/Notes";
import "../style/App.css";
import LandingPage from "../pages/LandingPage";
import ListActivity from "../pages/ListActivity";
import Profile from "../pages/Profile";
import Beranda from "../pages/Beranda";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/activity" element={<ListActivity />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
