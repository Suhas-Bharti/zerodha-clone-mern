import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './index.css';
import Home from './components/Home';

const App = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/verify", { withCredentials: true })
      .then((res) => {
        if (res.data.status === true) {
          setIsAuthenticated(true);
        } else {
          // Not logged in — redirect to login page
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch(() => {
        // Network error or server down — redirect to login
        window.location.href = "http://localhost:3000/login";
      })
      .finally(() => {
        setAuthChecked(true);
      });
  }, []);

  // Jab tak verify call complete nahi hoti, kuch mat dikhao
  if (!authChecked || !isAuthenticated) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1rem",
        color: "#999"
      }}>
        Verifying session...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
