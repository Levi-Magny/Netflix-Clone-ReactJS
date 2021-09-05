import React, { useEffect } from 'react';
import Tmdb from './Tmdb'
import './App.css';

function App() {
  useEffect(()=>{
    const loadAll = async () => {
      // pegando a lista inteira
      let list = await Tmdb();
      console.log(list);
    }
    loadAll();
  });

  return (
    <div>Netflix Clone</div>
  );
}

export default App;
