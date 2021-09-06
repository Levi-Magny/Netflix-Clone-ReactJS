import React, { useEffect, useState } from 'react';
import {getHomeList, getMovieInfo} from './Tmdb'
import MovieRoll from './components/MovieRoll';
import FilmeDestaque from './components/FilmeDestaque';
import Header from './components/Header';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [dadosDestaques, setDadosDestaque] = useState(null);

  const [headerBlack, setHeaderBlack] = useState(false);
  
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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setHeaderBlack(true);
      } else {
        setHeaderBlack(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  return (
    <div className="page">
      {/* Header */}
      <Header black={headerBlack} />
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
      <footer>
        Feito por <a rel="noreferrer" target="_blank" href="https://github.com/Levi-Magny"><strong>Levi Magny</strong></a><br/>
        Direitos de imagem para <a rel="noreferrer" target="_blank" href="https://netflix.com/"><strong>Netflix</strong></a> <br/>
        Dados obtidos do site Themoviedb.org.
      </footer>
      {movieList.length === 0 && 
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="carregando" />
        </div>
      }
    </div>
  );
}

export default App;
