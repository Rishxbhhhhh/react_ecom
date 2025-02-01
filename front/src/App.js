import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Navigate, BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';   

import Header from './Components/Header/Header';
import Home from './pages/Home/Index';
import About from './pages/About/Index';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderLayout /> {/* Wrap all routes in this layout */}
      </BrowserRouter>
    </div>
  );
};

// Define HeaderLayout to include the Header conditionally
const HeaderLayout = () => {
  const location = useLocation();
  const noHeaderRoutes = ["/login", "/signup","/404"];

  return (
    <>
      {/* Conditionally render Header based on route */}
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      
      <Routes>
        <Route path = "*" element={<Navigate to={"/404"} />} />
        <Route path = "/404" element={<Error />} />
        {["/home", "/"].map((i) => <Route key={i} path={i} element={<Home />} />)}
        
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
