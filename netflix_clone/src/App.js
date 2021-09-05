import React, { useEffect, useState } from 'react';
import {getHomeList, getMovieInfo} from './Tmdb'
import MovieRoll from './components/MovieRoll';
import FilmeDestaque from './components/FilmeDestaque';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [dadosDestaques, setDadosDestaque] = useState(null);
  
  useEffect(()=>{
    const loadAll = async () => {
      // pegando a lista inteira
      let list = await getHomeList();
      setMovieList(list);

      // pegando destaques.
      let originals = list.filter(i => i.slug === 'Originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1 ));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');

      setDadosDestaque(chosenInfo);
    }

    loadAll();
  },[]);

  return (
    <div className="page">
      {/* Header */}
      {/* Destaque */}
      {dadosDestaques && 
        <FilmeDestaque item={dadosDestaques}/>
      }
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
