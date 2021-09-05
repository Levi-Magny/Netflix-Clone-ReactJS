import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import MovieRoll from './components/MovieRoll/MovieRoll';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  
  useEffect(()=>{
    const loadAll = async () => {
      // pegando a lista inteira
      let list = await Tmdb();
      setMovieList(list);
    }

    loadAll();
  });

  return (
    <div className="page">
      {/* Header */}
      {/* Destaque */}
      {/* Listas */}
      <section className="lists">
        {movieList.map((item, key) => {
          return (
            <MovieRoll key={key} title={item.title} items={item.items}/>
          );
        })}
      </section>
      {/* Rodapé Basicão */}
    </div>
  );
}

export default App;
