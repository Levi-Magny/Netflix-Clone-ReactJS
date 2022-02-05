import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from './pages/browse';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Browse/>}/>
      </Routes>
    </Router>
  );
}

export default App;
