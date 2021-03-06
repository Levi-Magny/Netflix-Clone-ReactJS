import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from './pages/browse';
import Inicio from './pages/inicio';
import Login from './pages/login';
import SignUp from './pages/signUp';

import './App.css';
import { GeneralProvider } from './context/LoginContext';

function App() {
  return (
    <GeneralProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route path="/browse" element={<Browse/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </GeneralProvider>
  );
}

export default App;
