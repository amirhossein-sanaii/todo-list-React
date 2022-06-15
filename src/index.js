import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';


import './index.css';
import App from './App';
import About from './Component/Route/About'
import Bloog from './Component/Route/Bloog'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Bloog" element={<Bloog />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
