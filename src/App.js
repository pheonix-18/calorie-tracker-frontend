// import rea
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Routes
// import Redirect

import './App.css';
import Login2 from './Components/login2';
import Home from './Components/home';
import { AuthProvider } from './AuthProvider';

function App() {
  return (
  <AuthProvider>
    <Routes>
      <Route index element = {<Login2 />} />
      <Route path="/login" element={<Login2 />} />
      <Route path="/home" element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
      }
      />
    </Routes>
  </AuthProvider>
  );
}

const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem('isAuthenticated')
  if (!token || token.localeCompare("false") === 0) { 
    console.log("User not logged in, redirecting to login page")
    return <Navigate to="/" replace/>
  }
  return children;
};

export default App;
