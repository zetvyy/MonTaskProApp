import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Notes from "../pages/Notes";
import '../style/App.css';
import LandingPage from '../pages/LandingPage';
import ListActivity from '../pages/ListActivity';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
        <Route path="/landing" element={
            <LandingPage/>
          }></Route>
          <Route path="/list" element={
            <ListActivity />
          }></Route>
          <Route path="/" element={
            <Notes />
          }></Route>
          <Route path="/register" element={
            <Register/>
          }></Route>
          <Route path="/login" element={
            <Login/>
          }></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
