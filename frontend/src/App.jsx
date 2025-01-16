import React from 'react';
import './App.css'
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './webpages/dashboard';
import Landing from './webpages/landing';
import Login from './webpages/login';
import Register from './webpages/register';


function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element= {<Landing />}/>
          <Route path="/dashboard" element = {
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
