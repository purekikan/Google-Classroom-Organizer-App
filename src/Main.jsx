import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import App from './App';
import Calendr from './Calendar.jsx';
import Login from './Login';

export default function Main() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="App" element={<App />} />
        <Route path="Calendar" element={<Calendr />} />
      </Routes>
    </div>
  );
}
