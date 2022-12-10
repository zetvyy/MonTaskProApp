import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Notes from "../pages/Notes";
import "../style/App.css";
import LandingPage from "../pages/LandingPage";
import ListActivity from "../pages/ListActivity";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/protecRouting";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/activity"
            element={
              <ProtectedRoute>
                <ListActivity />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
