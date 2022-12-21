import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import React from "react";
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
