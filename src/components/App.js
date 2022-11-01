import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import '../style/App.css';
import LandingPage from '../pages/LandingPage';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={
            <LandingPage />
          }></Route>
          <Route path="/register" element={
            <Register/>
          }></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
