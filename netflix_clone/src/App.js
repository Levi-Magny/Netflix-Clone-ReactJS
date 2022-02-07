import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from './pages/browse';
import Inicio from './pages/inicio';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route path="/browse" element={<Browse/>}/>
      </Routes>
    </Router>
  );
}

export default App;
